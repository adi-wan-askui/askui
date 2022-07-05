import WebSocket from 'ws';
import { CaptureScreenshotRequest, ControlRequest, StartRecordingRequest, StopRecordingRequest, ReadRecordingRequest, InteractiveAnnotationRequest, GetProcessPidRequest, } from '../core/runner-protocol';
import { logger } from '../lib/logger';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { ReadRecordingResponseStreamHandler } from './read-recording-response-stream-handler';
import { UiControlClientError } from './ui-control-client-error';
export class UiControllerClient {
    constructor(url) {
        this.url = url;
        this.connectionState = UiControllerClientConnectionState.NOT_CONNECTED;
        this.currentReject = UiControllerClient.EMPTY_REJECT;
        this.currentResolve = UiControllerClient.EMPTY_RESOLVE;
    }
    clearResponse() {
        this.currentReject = UiControllerClient.EMPTY_REJECT;
        this.currentResolve = UiControllerClient.EMPTY_RESOLVE;
    }
    onMessage(data) {
        clearTimeout(this.timeout);
        const response = JSON.parse(data.toString());
        if (response.data.error) {
            this.currentReject(response);
            this.clearResponse();
            return;
        }
        this.currentResolve(response);
        if (response.msgName === 'READ_RECORDING_PART_RESPONSE') {
            return;
        }
        this.clearResponse();
    }
    connect() {
        this.connectionState = UiControllerClientConnectionState.CONNECTING;
        return new Promise((resolve, reject) => {
            try {
                this.ws = new WebSocket(this.url);
                this.ws.on('message', (data) => { this.onMessage(data); });
                this.ws.on('open', () => {
                    this.connectionState = UiControllerClientConnectionState.CONNECTED;
                    resolve(this.connectionState);
                });
                this.ws.on('error', (error) => {
                    this.connectionState = UiControllerClientConnectionState.ERROR;
                    reject(new UiControlClientError(`Connection to UI Controller cannot be established,
          Probably it was not started. Makse sure you started UI Controller with this 
          Url ${this.url}. Error message  ${error.message}`));
                });
            }
            catch (error) {
                reject(new UiControlClientError(`Connection to UI Controller cannot be established. Reason: ${error}`));
            }
        });
    }
    close() {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
    }
    sendAndReceive(msg, requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS) {
        return new Promise((resolve, reject) => {
            this.currentResolve = resolve;
            this.currentReject = reject;
            try {
                this.send(msg, requestTimeout);
                this.timeout = setTimeout(() => this.currentReject(`Request to UI Controller timed out.
          It seems that the UI Controller is not running. Please, make sure that it is running when executing tests.`), UiControllerClient.REQUEST_TIMEOUT_IN_MS);
            }
            catch (error) {
                this.currentReject(`The communication to the UI Controller is broken. Reason: ${error}`);
            }
        });
    }
    send(msg, _requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS) {
        if (!this.currentReject || !this.currentResolve) {
            throw Error('Request is not finished! It is not possible to have multiple requests at the same time.');
        }
        logger.debug(`Send: ${JSON.stringify(msg.msgName)}`);
        this.ws.send(JSON.stringify(msg));
    }
    requestScreenshot() {
        return this.sendAndReceive(new CaptureScreenshotRequest());
    }
    getServerPid() {
        return this.sendAndReceive(new GetProcessPidRequest());
    }
    startRecording() {
        return this.sendAndReceive(new StartRecordingRequest());
    }
    stopRecording() {
        return this.sendAndReceive(new StopRecordingRequest());
    }
    readRecording() {
        return new Promise((resolve, reject) => {
            const readRecordingStreamHandler = new ReadRecordingResponseStreamHandler(resolve, reject);
            this.currentResolve = readRecordingStreamHandler.onMessage;
            this.currentReject = readRecordingStreamHandler.onError;
            this.send(new ReadRecordingRequest(), 60 * 15 * 1000);
        });
    }
    annotateInteractively(boundingBoxes, imageString) {
        return new Promise((resolve, reject) => {
            this.currentResolve = resolve;
            this.currentReject = reject;
            this.send(new InteractiveAnnotationRequest(boundingBoxes, imageString), 60 * 60 * 1000);
        });
    }
    requestControl(controlCommand) {
        return this.sendAndReceive(new ControlRequest(controlCommand));
    }
}
UiControllerClient.EMPTY_REJECT = (_reason) => { };
UiControllerClient.EMPTY_RESOLVE = (_value) => { };
UiControllerClient.REQUEST_TIMEOUT_IN_MS = 30000;

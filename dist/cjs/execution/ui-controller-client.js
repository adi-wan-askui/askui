"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiControllerClient = void 0;
const ws_1 = __importDefault(require("ws"));
const runner_protocol_1 = require("../core/runner-protocol");
const logger_1 = require("../lib/logger");
const ui_controller_client_connection_state_1 = require("./ui-controller-client-connection-state");
const read_recording_response_stream_handler_1 = require("./read-recording-response-stream-handler");
const ui_control_client_error_1 = require("./ui-control-client-error");
class UiControllerClient {
    constructor(url) {
        this.url = url;
        this.connectionState = ui_controller_client_connection_state_1.UiControllerClientConnectionState.NOT_CONNECTED;
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
        this.connectionState = ui_controller_client_connection_state_1.UiControllerClientConnectionState.CONNECTING;
        return new Promise((resolve, reject) => {
            try {
                this.ws = new ws_1.default(this.url);
                this.ws.on('message', (data) => { this.onMessage(data); });
                this.ws.on('open', () => {
                    this.connectionState = ui_controller_client_connection_state_1.UiControllerClientConnectionState.CONNECTED;
                    resolve(this.connectionState);
                });
                this.ws.on('error', (error) => {
                    this.connectionState = ui_controller_client_connection_state_1.UiControllerClientConnectionState.ERROR;
                    reject(new ui_control_client_error_1.UiControlClientError(`Connection to UI Controller cannot be established,
          Probably it was not started. Makse sure you started UI Controller with this 
          Url ${this.url}. Error message  ${error.message}`));
                });
            }
            catch (error) {
                reject(new ui_control_client_error_1.UiControlClientError(`Connection to UI Controller cannot be established. Reason: ${error}`));
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
        logger_1.logger.debug(`Send: ${JSON.stringify(msg.msgName)}`);
        this.ws.send(JSON.stringify(msg));
    }
    requestScreenshot() {
        return this.sendAndReceive(new runner_protocol_1.CaptureScreenshotRequest());
    }
    getServerPid() {
        return this.sendAndReceive(new runner_protocol_1.GetProcessPidRequest());
    }
    startRecording() {
        return this.sendAndReceive(new runner_protocol_1.StartRecordingRequest());
    }
    stopRecording() {
        return this.sendAndReceive(new runner_protocol_1.StopRecordingRequest());
    }
    readRecording() {
        return new Promise((resolve, reject) => {
            const readRecordingStreamHandler = new read_recording_response_stream_handler_1.ReadRecordingResponseStreamHandler(resolve, reject);
            this.currentResolve = readRecordingStreamHandler.onMessage;
            this.currentReject = readRecordingStreamHandler.onError;
            this.send(new runner_protocol_1.ReadRecordingRequest(), 60 * 15 * 1000);
        });
    }
    annotateInteractively(boundingBoxes, imageString) {
        return new Promise((resolve, reject) => {
            this.currentResolve = resolve;
            this.currentReject = reject;
            this.send(new runner_protocol_1.InteractiveAnnotationRequest(boundingBoxes, imageString), 60 * 60 * 1000);
        });
    }
    requestControl(controlCommand) {
        return this.sendAndReceive(new runner_protocol_1.ControlRequest(controlCommand));
    }
}
exports.UiControllerClient = UiControllerClient;
UiControllerClient.EMPTY_REJECT = (_reason) => { };
UiControllerClient.EMPTY_RESOLVE = (_value) => { };
UiControllerClient.REQUEST_TIMEOUT_IN_MS = 30000;

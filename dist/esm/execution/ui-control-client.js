var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CustomElement } from '../core/model/test-case-dto';
import { FluentCommand, } from './dsl';
import { HttpClientGot } from '../utils/http/http-client-got';
import { UiControllerClient } from './ui-controller-client';
import { ExecutionRuntime } from './execution-runtime';
import { InferenceClient } from './inference-client';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { logger } from '../lib/logger';
import { TestStepState } from '../core/model/test-case-result-dto';
import { AnnotationLevel } from './annotation-level';
import { UiControlClientError } from './ui-control-client-error';
import { envCredentials } from './read-environment-credentials';
import { Analytics } from '../utils/analytics';
const getClientArgsWithDefaults = (clientArgs = {}) => (Object.assign({ uiControllerUrl: 'http://localhost:6769', inferenceServerUrl: 'https://inference.askui.com', annotationLevel: AnnotationLevel.DISABLED }, clientArgs));
export class UiControlClient extends FluentCommand {
    constructor(httpClient, clientArgs) {
        super();
        this.httpClient = httpClient;
        this.clientArgs = clientArgs;
        this.secretText = undefined;
    }
    static build(clientArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const analytics = new Analytics();
            const analyticsHeaders = yield analytics.getAnalyticsHeaders();
            const cas = getClientArgsWithDefaults(clientArgs);
            const httpClient = new HttpClientGot(cas.credentials || envCredentials(), analyticsHeaders);
            return new UiControlClient(httpClient, cas);
        });
    }
    get uiControllerClient() {
        if (!this._uiControllerClient) {
            this._uiControllerClient = new UiControllerClient(this.clientArgs.uiControllerUrl);
        }
        return this._uiControllerClient;
    }
    get inferenceClient() {
        return new InferenceClient(this.clientArgs.inferenceServerUrl, this.httpClient);
    }
    get executionRuntime() {
        return new ExecutionRuntime(this.uiControllerClient, this.inferenceClient);
    }
    annotateByDefault(testStepState, customElements = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((testStepState === TestStepState.FAILED
                && this.clientArgs.annotationLevel === AnnotationLevel.DISABLED)
                || (testStepState === TestStepState.PASSED
                    && this.clientArgs.annotationLevel !== AnnotationLevel.ALL)) {
                return;
            }
            yield this.annotate({
                customElements,
                fileNamePrefix: `${testStepState.toLowerCase()}_testStep_annotation`,
            });
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const connectionState = yield this.uiControllerClient.connect();
            return connectionState;
        });
    }
    annotate(annotationRequest = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const annotation = yield this.executionRuntime.annotateImage(annotationRequest.imagePath, annotationRequest.customElements);
            AnnotationWriter.write(annotation.toHtml(), annotationRequest.outputPath, annotationRequest.fileNamePrefix);
            return annotation;
        });
    }
    annotateInteractively() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.executionRuntime.annotateInteractively();
            }
            catch (err) {
                logger.error(err);
            }
        });
    }
    exec(instruction, customElementJson = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const customElements = yield CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
            const { secretText } = this;
            try {
                yield this.executionRuntime.executeTestStep({
                    instruction,
                    customElements,
                    secretText,
                });
                yield this.annotateByDefault(TestStepState.PASSED, customElements);
                return yield Promise.resolve();
            }
            catch (error) {
                yield this.annotateByDefault(TestStepState.FAILED, customElements);
                return Promise.reject(new UiControlClientError(`A problem occures while executing the instruction: ${instruction}. Reason ${error}`));
            }
        });
    }
    /**
     * Types a text inside the filtered element.
     *
     * By default, the `text` is included in the logs and sent over to the askui Inference server to
     * predict in which context the typing has to occur. You can exclude the `text` from the logs
     * and the request to the askui Inference server setting `options.isSecret` to `true`.
     * This should not change the quality of the prediction of the askui Inference server. In this
     * case, `options.secretMask` is included in logs and sent over instead of the `text`.
     *
     * @param {string} text - A text to type.
     * @param {Object} [options]
     * @param {boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
     *   logs of askui nor sent over to askui Inference for prediction.
     * @param {string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this
     *   is included in logs and sent over to askui Inference for prediction instead of the `text`.
     *
     * @return {FluentFilters}
     */
    typeIn(text, { isSecret = false, secretMask = '****' } = {}) {
        if (isSecret) {
            this.secretText = text;
            return super.typeIn(secretMask);
        }
        return super.typeIn(text);
    }
    /**
     * Types a text at the current position.
     *
     * By default, the `text` is included in the logs and sent over to the askui Inference server to
     * predict in which context the typing has to occur. You can exclude the `text` from the logs
     * and the request to the askui Inference server setting `options.isSecret` to `true`.
     * This should not change the quality of the prediction of the askui Inference server. In this
     * case, `options.secretMask` is included in logs and sent over instead of the `text`.
     *
     * @param {string} text - A text to type.
     * @param {Object} options
     * @param {boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
     *   logs of askui nor sent over to askui Inference for prediction.
     * @param {string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this
     *   is included in logs and sent over to askui Inference for prediction instead of the `text`.
     *
     * @return {Exec}
     */
    type(text, { isSecret = false, secretMask = '****' } = {}) {
        if (isSecret) {
            this.secretText = text;
            return super.type(secretMask);
        }
        return super.type(text);
    }
    /**
     * Waits for `<delayInMs>` ms, e.g., 1000 ms. The exact delay may be a little longer
     * than `<delayInMs>` but never shorter than that.
     *
     * @param {number} delayInMs - The delay in ms to wait for.
     *
     * @return {Executable}
     */
    // eslint-disable-next-line class-methods-use-this
    waitFor(delayInMs) {
        return {
            exec() {
                logger.debug(`Wait for ${delayInMs} ms`);
                return new Promise((resolve) => { setTimeout(() => resolve(), delayInMs); });
            },
        };
    }
    /**
    * closes the connection to the controlui-server`.
    */
    close() {
        this.uiControllerClient.close();
    }
}

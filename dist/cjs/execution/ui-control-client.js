"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiControlClient = void 0;
const test_case_dto_1 = require("../core/model/test-case-dto");
const dsl_1 = require("./dsl");
const http_client_got_1 = require("../utils/http/http-client-got");
const ui_controller_client_1 = require("./ui-controller-client");
const execution_runtime_1 = require("./execution-runtime");
const inference_client_1 = require("./inference-client");
const annotation_writer_1 = require("../core/annotation/annotation-writer");
const logger_1 = require("../lib/logger");
const test_case_result_dto_1 = require("../core/model/test-case-result-dto");
const annotation_level_1 = require("./annotation-level");
const ui_control_client_error_1 = require("./ui-control-client-error");
const read_environment_credentials_1 = require("./read-environment-credentials");
const analytics_1 = require("../utils/analytics");
const getClientArgsWithDefaults = (clientArgs = {}) => (Object.assign({ uiControllerUrl: 'http://localhost:6769', inferenceServerUrl: 'https://inference.askui.com', annotationLevel: annotation_level_1.AnnotationLevel.DISABLED }, clientArgs));
class UiControlClient extends dsl_1.FluentCommand {
    constructor(httpClient, clientArgs) {
        super();
        this.httpClient = httpClient;
        this.clientArgs = clientArgs;
        this.secretText = undefined;
    }
    static build(clientArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const analytics = new analytics_1.Analytics();
            const analyticsHeaders = yield analytics.getAnalyticsHeaders();
            const cas = getClientArgsWithDefaults(clientArgs);
            const httpClient = new http_client_got_1.HttpClientGot(cas.credentials || (0, read_environment_credentials_1.envCredentials)(), analyticsHeaders);
            return new UiControlClient(httpClient, cas);
        });
    }
    get uiControllerClient() {
        if (!this._uiControllerClient) {
            this._uiControllerClient = new ui_controller_client_1.UiControllerClient(this.clientArgs.uiControllerUrl);
        }
        return this._uiControllerClient;
    }
    get inferenceClient() {
        return new inference_client_1.InferenceClient(this.clientArgs.inferenceServerUrl, this.httpClient);
    }
    get executionRuntime() {
        return new execution_runtime_1.ExecutionRuntime(this.uiControllerClient, this.inferenceClient);
    }
    annotateByDefault(testStepState, customElements = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((testStepState === test_case_result_dto_1.TestStepState.FAILED
                && this.clientArgs.annotationLevel === annotation_level_1.AnnotationLevel.DISABLED)
                || (testStepState === test_case_result_dto_1.TestStepState.PASSED
                    && this.clientArgs.annotationLevel !== annotation_level_1.AnnotationLevel.ALL)) {
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
            annotation_writer_1.AnnotationWriter.write(annotation.toHtml(), annotationRequest.outputPath, annotationRequest.fileNamePrefix);
            return annotation;
        });
    }
    annotateInteractively() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.executionRuntime.annotateInteractively();
            }
            catch (err) {
                logger_1.logger.error(err);
            }
        });
    }
    exec(instruction, customElementJson = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const customElements = yield test_case_dto_1.CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
            const { secretText } = this;
            try {
                yield this.executionRuntime.executeTestStep({
                    instruction,
                    customElements,
                    secretText,
                });
                yield this.annotateByDefault(test_case_result_dto_1.TestStepState.PASSED, customElements);
                return yield Promise.resolve();
            }
            catch (error) {
                yield this.annotateByDefault(test_case_result_dto_1.TestStepState.FAILED, customElements);
                return Promise.reject(new ui_control_client_error_1.UiControlClientError(`A problem occures while executing the instruction: ${instruction}. Reason ${error}`));
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
                logger_1.logger.debug(`Wait for ${delayInMs} ms`);
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
exports.UiControlClient = UiControlClient;

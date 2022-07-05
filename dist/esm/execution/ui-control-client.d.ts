import { CustomElementJson } from '../core/model/test-case-dto';
import { Exec, Executable, FluentCommand, FluentFilters } from './dsl';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { ClientArgs } from './ui-controller-client-interface';
export declare class UiControlClient extends FluentCommand {
    private httpClient;
    private clientArgs;
    private _uiControllerClient?;
    private constructor();
    static build(clientArgs?: ClientArgs): Promise<UiControlClient>;
    private get uiControllerClient();
    private get inferenceClient();
    private get executionRuntime();
    private annotateByDefault;
    connect(): Promise<UiControllerClientConnectionState>;
    annotate(annotationRequest?: AnnotationRequest): Promise<Annotation>;
    annotateInteractively(): Promise<void>;
    exec(instruction: string, customElementJson?: CustomElementJson[]): Promise<void>;
    private secretText;
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
    typeIn(text: string, { isSecret, secretMask }?: {
        isSecret?: boolean | undefined;
        secretMask?: string | undefined;
    }): FluentFilters;
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
    type(text: string, { isSecret, secretMask }?: {
        isSecret?: boolean | undefined;
        secretMask?: string | undefined;
    }): Exec;
    /**
     * Waits for `<delayInMs>` ms, e.g., 1000 ms. The exact delay may be a little longer
     * than `<delayInMs>` but never shorter than that.
     *
     * @param {number} delayInMs - The delay in ms to wait for.
     *
     * @return {Executable}
     */
    waitFor(delayInMs: number): Executable;
    /**
    * closes the connection to the controlui-server`.
    */
    close(): void;
}

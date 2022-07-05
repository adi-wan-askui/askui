import { TestStep } from '../core/model/test-case-dto';
import { UiControllerClient } from './ui-controller-client';
import { InferenceClient } from './inference-client';
import { Annotation } from '../core/annotation/annotation';
import { CustomElementJson } from '../core/model/test-case-dto/custom-element-json';
export declare class ExecutionRuntime {
    private uiControllerClient;
    private inferenceClient;
    constructor(uiControllerClient: UiControllerClient, inferenceClient: InferenceClient);
    executeTestStep(step: TestStep): Promise<void>;
    private requestControl;
    /**
     * @param {TestStep} step - Test step used for predicting command.
     */
    private executeCommand;
    private readonly EXEC_REPETITION_COUNT;
    private executeCommandRepeatedly;
    private readonly PREDICT_COMMAND_RETRY_COUNT;
    /**
     * Command prediction may fail, e.g., due to application still loading
     * --> retry with linear back-off
     */
    private predictCommandWithRetry;
    private getImageIfRequired;
    private predictCommand;
    annotateInteractively(): Promise<void>;
    takeScreenshotIfImageisNotProvided(imagePath?: string): Promise<string>;
    annotateImage(imagePath?: string, customElementJson?: CustomElementJson[]): Promise<Annotation>;
}

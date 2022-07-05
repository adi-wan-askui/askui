var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ControlCommandCode } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { RepeatError } from './repeat-error';
import { delay } from './misc';
import { ControlCommandError } from './control-command-error';
import { logger } from '../lib/logger';
import { Base64Image } from '../utils/base_64_image/base-64-image';
export class ExecutionRuntime {
    constructor(uiControllerClient, inferenceClient) {
        this.uiControllerClient = uiControllerClient;
        this.inferenceClient = inferenceClient;
        this.EXEC_REPETITION_COUNT = 25;
        this.PREDICT_COMMAND_RETRY_COUNT = 2;
    }
    executeTestStep(step) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug(step.instruction);
            yield this.executeCommand(step);
        });
    }
    requestControl(controlCommand) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uiControllerClient.requestControl(controlCommand);
        });
    }
    /**
     * @param {TestStep} step - Test step used for predicting command.
     */
    executeCommand(step) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const controlCommand = yield this.predictCommandWithRetry(step);
            if (controlCommand.code === ControlCommandCode.OK) {
                return this.requestControl(controlCommand);
            }
            if (controlCommand.tryToRepeat) {
                yield this.requestControl(controlCommand);
                return this.executeCommandRepeatedly(step);
            }
            throw new ControlCommandError(((_a = controlCommand.actions[0]) === null || _a === void 0 ? void 0 : _a.text) || '');
        });
    }
    executeCommandRepeatedly(step) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /* eslint-disable no-await-in-loop */
            for (let repeatCount = this.EXEC_REPETITION_COUNT; repeatCount >= 0; repeatCount -= 1) {
                if (repeatCount === 0) {
                    throw new RepeatError(`Max. number (${this.EXEC_REPETITION_COUNT}) of repetitions of command executions `
                        + 'from a single test step reached');
                }
                logger.debug('Repeat command execution....');
                const controlCommand = yield this.predictCommandWithRetry(step);
                if (controlCommand.code === ControlCommandCode.OK) {
                    break;
                }
                if (controlCommand.tryToRepeat) {
                    yield this.requestControl(controlCommand);
                }
                else {
                    throw new ControlCommandError(((_a = controlCommand.actions[0]) === null || _a === void 0 ? void 0 : _a.text) || '');
                }
            }
        });
    }
    /**
     * Command prediction may fail, e.g., due to application still loading
     * --> retry with linear back-off
     */
    /* eslint-disable-next-line consistent-return */
    predictCommandWithRetry(step) {
        return __awaiter(this, void 0, void 0, function* () {
            let command = yield this.predictCommand(step);
            /* eslint-disable no-await-in-loop */
            for (let k = 0; k < this.PREDICT_COMMAND_RETRY_COUNT; k += 1) {
                if (command.code === ControlCommandCode.OK) {
                    return command;
                }
                const msUntilRetry = k * 1000;
                logger.debug(`Wait ${msUntilRetry} and retry predicting command...`);
                yield delay(msUntilRetry);
                command = yield this.predictCommand(step);
            }
            /* eslint-enable no-await-in-loop */
            return command;
        });
    }
    getImageIfRequired(instruction) {
        return __awaiter(this, void 0, void 0, function* () {
            const isImageRequired = yield this.inferenceClient.isImageRequired(instruction);
            if (!isImageRequired) {
                return undefined;
            }
            const screenshotResponse = yield this.uiControllerClient.requestScreenshot();
            return screenshotResponse.data.image;
        });
    }
    predictCommand(step) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield this.getImageIfRequired(step.instruction);
            const controlCommand = yield this.inferenceClient.predictControlCommand(step.instruction, step.customElements, image);
            if (step.secretText !== undefined) {
                controlCommand.setTextToBeTyped(step.secretText);
            }
            return controlCommand;
        });
    }
    annotateInteractively() {
        return __awaiter(this, void 0, void 0, function* () {
            const annotationResponse = yield this.annotateImage();
            yield this.uiControllerClient.annotateInteractively(annotationResponse.objects, annotationResponse.image);
        });
    }
    takeScreenshotIfImageisNotProvided(imagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64Image = '';
            if (imagePath !== undefined) {
                base64Image = (yield Base64Image.fromPath(imagePath)).toString();
            }
            if (imagePath === undefined) {
                const screenshotResponse = yield this.uiControllerClient.requestScreenshot();
                base64Image = screenshotResponse.data.image;
            }
            return base64Image;
        });
    }
    annotateImage(imagePath, customElementJson) {
        return __awaiter(this, void 0, void 0, function* () {
            let customElements = [];
            const base64Image = yield this.takeScreenshotIfImageisNotProvided(imagePath);
            if (customElementJson !== undefined) {
                customElements = yield CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
            }
            return this.inferenceClient.predictImageAnnotation(base64Image, customElements);
        });
    }
}

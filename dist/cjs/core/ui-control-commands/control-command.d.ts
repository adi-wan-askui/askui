import { Action } from './action';
import { ControlCommandCode } from './control-command-code';
export declare class ControlCommand {
    code: ControlCommandCode;
    actions: Action[];
    tryToRepeat: boolean;
    constructor(code: ControlCommandCode, actions: Action[], tryToRepeat?: boolean);
    static fromJson(json: ControlCommand, resizeRatio?: number): ControlCommand;
    setTextToBeTyped(text: string): void;
}

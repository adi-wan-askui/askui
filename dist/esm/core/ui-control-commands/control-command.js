import { Action } from './action';
import { ControlCommandCode } from './control-command-code';
import { InputEvent } from './input-event';
export class ControlCommand {
    constructor(code, actions, tryToRepeat = false) {
        this.code = code;
        this.actions = actions;
        this.tryToRepeat = tryToRepeat;
    }
    static fromJson(json, resizeRatio = 1) {
        return new ControlCommand(ControlCommandCode[json.code], json.actions.map((action) => Action.fromJson(action, resizeRatio)), json.tryToRepeat);
    }
    setTextToBeTyped(text) {
        this.actions = this.actions.map((action) => ([InputEvent.TYPE, InputEvent.TYPE_TEXT].includes(action.inputEvent)
            ? new Action(action.inputEvent, action.position, text) : action));
    }
}

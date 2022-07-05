"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCommand = void 0;
const action_1 = require("./action");
const control_command_code_1 = require("./control-command-code");
const input_event_1 = require("./input-event");
class ControlCommand {
    constructor(code, actions, tryToRepeat = false) {
        this.code = code;
        this.actions = actions;
        this.tryToRepeat = tryToRepeat;
    }
    static fromJson(json, resizeRatio = 1) {
        return new ControlCommand(control_command_code_1.ControlCommandCode[json.code], json.actions.map((action) => action_1.Action.fromJson(action, resizeRatio)), json.tryToRepeat);
    }
    setTextToBeTyped(text) {
        this.actions = this.actions.map((action) => ([input_event_1.InputEvent.TYPE, input_event_1.InputEvent.TYPE_TEXT].includes(action.inputEvent)
            ? new action_1.Action(action.inputEvent, action.position, text) : action));
    }
}
exports.ControlCommand = ControlCommand;

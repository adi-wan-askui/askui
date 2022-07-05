"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const input_event_1 = require("./input-event");
class Action {
    constructor(inputEvent, position, text) {
        this.inputEvent = inputEvent;
        this.position = position;
        this.text = text;
    }
    static fromJson(action, resizeRatio = 1) {
        return new Action(input_event_1.InputEvent[action.inputEvent], {
            x: action.position.x * resizeRatio,
            y: action.position.y * resizeRatio,
        }, action.text);
    }
}
exports.Action = Action;

import { InputEvent } from './input-event';
export class Action {
    constructor(inputEvent, position, text) {
        this.inputEvent = inputEvent;
        this.position = position;
        this.text = text;
    }
    static fromJson(action, resizeRatio = 1) {
        return new Action(InputEvent[action.inputEvent], {
            x: action.position.x * resizeRatio,
            y: action.position.y * resizeRatio,
        }, action.text);
    }
}

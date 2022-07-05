import { InputEvent } from './input-event';
export declare class Action {
    inputEvent: InputEvent;
    position: {
        x: number;
        y: number;
    };
    text: string;
    constructor(inputEvent: InputEvent, position: {
        x: number;
        y: number;
    }, text: string);
    static fromJson(action: Action, resizeRatio?: number): Action;
}

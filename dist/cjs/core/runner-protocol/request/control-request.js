"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRequest = void 0;
class ControlRequest {
    constructor(controlCommand) {
        this.controlCommand = controlCommand;
        this.msgName = ControlRequest.msgName;
    }
}
exports.ControlRequest = ControlRequest;
ControlRequest.msgName = 'CONTROL_REQUEST';

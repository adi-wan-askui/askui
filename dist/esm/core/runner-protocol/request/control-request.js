export class ControlRequest {
    constructor(controlCommand) {
        this.controlCommand = controlCommand;
        this.msgName = ControlRequest.msgName;
    }
}
ControlRequest.msgName = 'CONTROL_REQUEST';

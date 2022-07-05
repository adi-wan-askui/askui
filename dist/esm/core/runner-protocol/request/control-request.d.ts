import { ControlCommand } from '../../ui-control-commands';
import { RunnerProtocolRequest } from './runner-protocol-request';
export declare class ControlRequest implements RunnerProtocolRequest {
    controlCommand: ControlCommand;
    static msgName: string;
    msgName: string;
    constructor(controlCommand: ControlCommand);
}

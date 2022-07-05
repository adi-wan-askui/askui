import { UiControllerArgs } from './ui-controller-args';
export declare class UiController {
    private args?;
    private server;
    constructor(args?: UiControllerArgs | undefined);
    start(timeoutInSeconds?: number): Promise<void>;
    stop(forceStop?: boolean): Promise<void>;
}

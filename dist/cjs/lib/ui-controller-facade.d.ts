import { UiControllerArgs, UiControllerArgsWithDefaults } from './ui-controller-args';
export declare abstract class UiControllerFacade {
    protected binaryPath: string;
    protected serverLogFile: string;
    protected readonly DefaultmaxWaitingForStartingInMs: number;
    start(args?: UiControllerArgs, maxWaitingForStartingInSeconds?: number): Promise<void>;
    stop(args?: UiControllerArgs, forceStop?: boolean): Promise<void>;
    protected serverLogFilePath(args?: UiControllerArgsWithDefaults): UiControllerArgsWithDefaults;
    protected killPort(port: number, forceStop?: boolean): Promise<void>;
    protected getStartingCommand(): string;
    protected makeBinaryExecutable(): void;
    protected runPreStartChecks(): Promise<void>;
    protected waitUntilStarted(args: UiControllerArgsWithDefaults, maxWaitingForStartingInSeconds?: number): Promise<void>;
    private isBinaryValid;
    private getBinary;
    private startWithDefaults;
}

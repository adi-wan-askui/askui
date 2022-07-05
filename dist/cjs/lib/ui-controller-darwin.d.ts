import { UiControllerFacade } from './ui-controller-facade';
export declare class UiControllerDarwin extends UiControllerFacade {
    protected makeBinaryExecutable(): void;
    protected getStartingCommand(): string;
    private makeDiskImageExecutable;
}

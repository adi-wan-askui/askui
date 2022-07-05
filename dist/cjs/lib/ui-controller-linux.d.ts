import { UiControllerFacade } from './ui-controller-facade';
export declare class UiControllerLinux extends UiControllerFacade {
    protected makeBinaryExecutable(): void;
    protected runPreStartChecks(): Promise<void>;
}

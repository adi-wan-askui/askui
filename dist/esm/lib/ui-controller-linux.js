var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { exec } from 'child_process';
import { promisify } from 'util';
import { UiControllerFacade } from './ui-controller-facade';
import { logger } from './logger';
import { WaylandError } from './wayland-error';
import { LibfuseError } from './libfuse-error';
export class UiControllerLinux extends UiControllerFacade {
    // eslint-disable-next-line class-methods-use-this
    makeBinaryExecutable() {
        exec(`chmod +x "${this.binaryPath}"`, (_exception, stdout) => logger.debug(stdout));
    }
    // eslint-disable-next-line class-methods-use-this
    runPreStartChecks() {
        return __awaiter(this, void 0, void 0, function* () {
            const runCommand = promisify(exec);
            const waylandStatus = yield runCommand('echo $WAYLAND_DISPLAY');
            if (waylandStatus.stdout.trim().includes('wayland')) {
                throw new WaylandError('Wayland is not supported: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#wayland');
            }
            /* First we want to check if the user is using a debian distribution.
            * and in the following if libfuse2 is installed.
            * With Ubunutu 22.04 libfuse2 is not installed per default.
            * For more information: https://discourse.joplinapp.org/t/appimage-incompatibility-in-ubuntu-22-04/25173
            */
            try {
                yield runCommand('dpkg --version');
            }
            catch (err) {
                return;
            }
            try {
                yield runCommand('dpkg -s libfuse2 | grep Status');
            }
            catch (_a) {
                throw new LibfuseError('Libfuse2 package is missing: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#libfuse2');
            }
        });
    }
}

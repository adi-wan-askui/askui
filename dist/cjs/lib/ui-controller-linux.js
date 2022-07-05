"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiControllerLinux = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
const ui_controller_facade_1 = require("./ui-controller-facade");
const logger_1 = require("./logger");
const wayland_error_1 = require("./wayland-error");
const libfuse_error_1 = require("./libfuse-error");
class UiControllerLinux extends ui_controller_facade_1.UiControllerFacade {
    // eslint-disable-next-line class-methods-use-this
    makeBinaryExecutable() {
        (0, child_process_1.exec)(`chmod +x "${this.binaryPath}"`, (_exception, stdout) => logger_1.logger.debug(stdout));
    }
    // eslint-disable-next-line class-methods-use-this
    runPreStartChecks() {
        return __awaiter(this, void 0, void 0, function* () {
            const runCommand = (0, util_1.promisify)(child_process_1.exec);
            const waylandStatus = yield runCommand('echo $WAYLAND_DISPLAY');
            if (waylandStatus.stdout.trim().includes('wayland')) {
                throw new wayland_error_1.WaylandError('Wayland is not supported: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#wayland');
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
                throw new libfuse_error_1.LibfuseError('Libfuse2 package is missing: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#libfuse2');
            }
        });
    }
}
exports.UiControllerLinux = UiControllerLinux;

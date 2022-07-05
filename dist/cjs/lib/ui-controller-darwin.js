"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiControllerDarwin = void 0;
const child_process_1 = require("child_process");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const ui_controller_facade_1 = require("./ui-controller-facade");
const logger_1 = require("./logger");
class UiControllerDarwin extends ui_controller_facade_1.UiControllerFacade {
    makeBinaryExecutable() {
        this.makeDiskImageExecutable();
    }
    getStartingCommand() {
        return `"${path_1.default.dirname(this.binaryPath)}/controlui-server.app/Contents/MacOS/controlui-server"`;
    }
    makeDiskImageExecutable() {
        const mountPoint = '/Volumes/controlui-server.dmg';
        (0, child_process_1.execSync)([
            'hdiutil attach',
            '-nobrowse',
            '-quiet',
            '-noautofsck',
            '-noautoopen',
            `-mountpoint "${mountPoint}"`,
            `"${this.binaryPath}"`,
        ].join(' '));
        const appBaseName = 'controlui-server.app';
        const appSrcPath = `${mountPoint}/${appBaseName}`;
        const appDestPath = `${path_1.default.dirname(this.binaryPath)}/${appBaseName}`;
        fs_extra_1.default.removeSync(appDestPath);
        fs_extra_1.default.copySync(appSrcPath, appDestPath);
        (0, child_process_1.exec)(`hdiutil detach "${mountPoint}"`, (_exception, stdout) => logger_1.logger.debug(stdout));
    }
}
exports.UiControllerDarwin = UiControllerDarwin;

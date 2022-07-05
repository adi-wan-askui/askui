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
exports.UiController = void 0;
const ui_controller_darwin_1 = require("./ui-controller-darwin");
const ui_controller_linux_1 = require("./ui-controller-linux");
const ui_controller_win32_1 = require("./ui-controller-win32");
const download_binaries_1 = require("./download-binaries");
class UiController {
    constructor(args) {
        this.args = args;
        switch ((0, download_binaries_1.platform)()) {
            case 'darwin':
                this.server = new ui_controller_darwin_1.UiControllerDarwin();
                break;
            case 'linux':
                this.server = new ui_controller_linux_1.UiControllerLinux();
                break;
            case 'win32':
                this.server = new ui_controller_win32_1.UiControllerWin32();
                break;
            default:
                throw new Error(`Platform "${(0, download_binaries_1.platform)()}" not supported.`);
        }
    }
    start(timeoutInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.server.start(this.args, timeoutInSeconds);
        });
    }
    stop(forceStop) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.server.stop(this.args, forceStop);
        });
    }
}
exports.UiController = UiController;

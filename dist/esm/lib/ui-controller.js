var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UiControllerDarwin } from './ui-controller-darwin';
import { UiControllerLinux } from './ui-controller-linux';
import { UiControllerWin32 } from './ui-controller-win32';
import { platform } from './download-binaries';
export class UiController {
    constructor(args) {
        this.args = args;
        switch (platform()) {
            case 'darwin':
                this.server = new UiControllerDarwin();
                break;
            case 'linux':
                this.server = new UiControllerLinux();
                break;
            case 'win32':
                this.server = new UiControllerWin32();
                break;
            default:
                throw new Error(`Platform "${platform()}" not supported.`);
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

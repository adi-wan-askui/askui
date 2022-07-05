var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import os from 'os';
import { UserIdentifier } from './user-identifier';
import { InstallationTimestamp } from './installation-timestamp';
export class Analytics {
    constructor() {
        this.userIdentifier = new UserIdentifier();
    }
    getAnalyticsHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = yield this.userIdentifier.userId();
            const headers = {
                'askui-user-id': userID,
                'askui-user-agent': `os:${os.platform()};arch:${os.arch()}`,
            };
            const askuiInstalledAt = yield InstallationTimestamp.get();
            if (askuiInstalledAt) {
                headers['askui-installed-at'] = askuiInstalledAt.toISOString();
            }
            return headers;
        });
    }
}

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
const os_1 = __importDefault(require("os"));
const user_identifier_1 = require("./user-identifier");
const installation_timestamp_1 = require("./installation-timestamp");
class Analytics {
    constructor() {
        this.userIdentifier = new user_identifier_1.UserIdentifier();
    }
    getAnalyticsHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = yield this.userIdentifier.userId();
            const headers = {
                'askui-user-id': userID,
                'askui-user-agent': `os:${os_1.default.platform()};arch:${os_1.default.arch()}`,
            };
            const askuiInstalledAt = yield installation_timestamp_1.InstallationTimestamp.get();
            if (askuiInstalledAt) {
                headers['askui-installed-at'] = askuiInstalledAt.toISOString();
            }
            return headers;
        });
    }
}
exports.Analytics = Analytics;

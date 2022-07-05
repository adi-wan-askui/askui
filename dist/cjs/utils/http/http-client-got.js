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
exports.HttpClientGot = void 0;
const got_1 = __importDefault(require("got"));
const credentials_1 = require("./credentials");
const custom_errors_1 = require("./custom-errors");
class HttpClientGot {
    constructor(credentialArgs, customHeaders) {
        this.credentialArgs = credentialArgs;
        this.customHeaders = customHeaders;
        this.headers = {};
        this.initHeaders(credentialArgs, customHeaders);
    }
    initHeaders(credentialArgs, customHeaders = {}) {
        const credentials = credentialArgs ? new credentials_1.Credentials(credentialArgs) : undefined;
        this.headers = Object.assign(Object.assign({}, (credentials ? { Authorization: `Basic ${credentials === null || credentials === void 0 ? void 0 : credentials.base64Encoded}` } : {})), customHeaders);
    }
    injectHeaders(options) {
        return Object.assign(Object.assign({}, options), { headers: this.headers });
    }
    post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.injectHeaders({ json: data, responseType: 'json', throwHttpErrors: false });
            const { body, statusCode } = yield got_1.default.post(url, options);
            if (statusCode !== 200) {
                throw (0, custom_errors_1.httpClientErrorHandler)(statusCode, JSON.stringify(body));
            }
            return body;
        });
    }
    get(url, options = { responseType: 'json' }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield got_1.default.get(url, this.injectHeaders(options));
            return response.body;
        });
    }
}
exports.HttpClientGot = HttpClientGot;

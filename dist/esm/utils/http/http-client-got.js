var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import got from 'got';
import { Credentials } from './credentials';
import { httpClientErrorHandler } from './custom-errors';
export class HttpClientGot {
    constructor(credentialArgs, customHeaders) {
        this.credentialArgs = credentialArgs;
        this.customHeaders = customHeaders;
        this.headers = {};
        this.initHeaders(credentialArgs, customHeaders);
    }
    initHeaders(credentialArgs, customHeaders = {}) {
        const credentials = credentialArgs ? new Credentials(credentialArgs) : undefined;
        this.headers = Object.assign(Object.assign({}, (credentials ? { Authorization: `Basic ${credentials === null || credentials === void 0 ? void 0 : credentials.base64Encoded}` } : {})), customHeaders);
    }
    injectHeaders(options) {
        return Object.assign(Object.assign({}, options), { headers: this.headers });
    }
    post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.injectHeaders({ json: data, responseType: 'json', throwHttpErrors: false });
            const { body, statusCode } = yield got.post(url, options);
            if (statusCode !== 200) {
                throw httpClientErrorHandler(statusCode, JSON.stringify(body));
            }
            return body;
        });
    }
    get(url, options = { responseType: 'json' }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield got.get(url, this.injectHeaders(options));
            return response.body;
        });
    }
}

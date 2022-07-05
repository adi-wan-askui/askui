"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientErrorHandler = exports.GeneralHttpClientError = void 0;
const server_http_client_error_1 = require("./server-http-client-error");
const authentication_http_client_error_1 = require("./authentication-http-client-error");
const client_http_client_error_1 = require("./client-http-client-error");
const unkown_http_client_error_1 = require("./unkown-http-client-error");
var general_http_client_error_1 = require("./general-http-client-error");
Object.defineProperty(exports, "GeneralHttpClientError", { enumerable: true, get: function () { return general_http_client_error_1.GeneralHttpClientError; } });
function httpClientErrorHandler(responseCode, errorMessage) {
    const diplayedMessage = `response code: ${responseCode}. Message:${errorMessage}`;
    if (responseCode >= 400 && responseCode < 500) {
        if (responseCode === 401 || responseCode === 403) {
            return new authentication_http_client_error_1.AuthenticationHttpClientError(diplayedMessage);
        }
        return new client_http_client_error_1.ClientHttpClientError(diplayedMessage);
    }
    if (responseCode >= 500 && responseCode < 600) {
        return new server_http_client_error_1.ServerHttpClientError(diplayedMessage);
    }
    return new unkown_http_client_error_1.UnkownHttpClientError(diplayedMessage);
}
exports.httpClientErrorHandler = httpClientErrorHandler;

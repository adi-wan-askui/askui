"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationHttpClientError = void 0;
const http_client_error_1 = require("./http-client-error");
class AuthenticationHttpClientError extends http_client_error_1.HttpClientError {
}
exports.AuthenticationHttpClientError = AuthenticationHttpClientError;

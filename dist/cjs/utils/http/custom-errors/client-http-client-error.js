"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientHttpClientError = void 0;
const http_client_error_1 = require("./http-client-error");
class ClientHttpClientError extends http_client_error_1.HttpClientError {
}
exports.ClientHttpClientError = ClientHttpClientError;

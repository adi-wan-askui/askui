"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnkownHttpClientError = void 0;
const http_client_error_1 = require("./http-client-error");
class UnkownHttpClientError extends http_client_error_1.HttpClientError {
}
exports.UnkownHttpClientError = UnkownHttpClientError;

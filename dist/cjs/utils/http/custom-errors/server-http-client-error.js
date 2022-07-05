"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerHttpClientError = void 0;
const http_client_error_1 = require("./http-client-error");
class ServerHttpClientError extends http_client_error_1.HttpClientError {
}
exports.ServerHttpClientError = ServerHttpClientError;

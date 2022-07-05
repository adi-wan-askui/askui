"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralHttpClientError = void 0;
const http_client_error_1 = require("./http-client-error");
class GeneralHttpClientError extends http_client_error_1.HttpClientError {
}
exports.GeneralHttpClientError = GeneralHttpClientError;

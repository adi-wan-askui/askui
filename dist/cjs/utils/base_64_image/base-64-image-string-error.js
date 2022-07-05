"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64ImageStringError = void 0;
const base_64_image_error_1 = require("./base-64-image-error");
class Base64ImageStringError extends base_64_image_error_1.Base64ImageError {
    constructor(str, prefix) {
        super(`Can't create Base64Image instance from string:\n${str}\n\n`
            + `String should start with "${prefix}".`);
    }
}
exports.Base64ImageStringError = Base64ImageStringError;

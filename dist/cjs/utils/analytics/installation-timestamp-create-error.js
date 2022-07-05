"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationTimestampCreateError = void 0;
class InstallationTimestampCreateError extends Error {
    constructor(err) {
        super(`Installation timestamp could not be created. \n${err.message}`);
    }
}
exports.InstallationTimestampCreateError = InstallationTimestampCreateError;

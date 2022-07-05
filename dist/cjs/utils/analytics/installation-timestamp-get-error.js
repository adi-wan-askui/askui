"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationTimestampGetError = void 0;
class InstallationTimestampGetError extends Error {
    constructor(err) {
        super(`Installation timestamp does not exist. Try reinstalling the lib to create it. \n${err.message}`);
    }
}
exports.InstallationTimestampGetError = InstallationTimestampGetError;

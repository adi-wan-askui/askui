"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCommandError = void 0;
class ControlCommandError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ControlCommandError';
    }
}
exports.ControlCommandError = ControlCommandError;

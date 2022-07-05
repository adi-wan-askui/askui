"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credentials = void 0;
class Credentials {
    constructor(credentials) {
        this.credentials = credentials;
    }
    get base64Encoded() {
        return this.buffered.toString('base64');
    }
    get buffered() {
        return Buffer.from(`${this.userName}:${this.credentials.token}`);
    }
    get userName() {
        return `${this.credentials.tenant}|${this.credentials.email}`;
    }
}
exports.Credentials = Credentials;

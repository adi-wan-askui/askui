"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envCredentials = void 0;
const lib_1 = require("../lib");
function envCredentials() {
    const envToken = process.env['ASKUI_TOKEN'];
    const envTenant = process.env['ASKUI_TENANT'];
    const envEmail = process.env['ASKUI_EMAIL'];
    if (envToken && envTenant && envEmail) {
        lib_1.logger.info('Credentials are used from ENV variables: ASKUI_TOKEN, ASKUI_TENANT and ASKUI_EMAIL');
        return {
            tenant: envTenant,
            email: envEmail,
            token: envToken,
        };
    }
    return undefined;
}
exports.envCredentials = envCredentials;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_environment_credentials_1 = require("./read-environment-credentials");
describe('envCredentials()', () => {
    test('should read the credentials from the environment variables', () => {
        process.env['ASKUI_TOKEN'] = 'token';
        process.env['ASKUI_TENANT'] = 'tenant';
        process.env['ASKUI_EMAIL'] = 'name@tenant.com';
        const credentialsFromTheEnv = (0, read_environment_credentials_1.envCredentials)();
        expect(credentialsFromTheEnv).toStrictEqual({ tenant: 'tenant', email: 'name@tenant.com', token: 'token' });
    });
});

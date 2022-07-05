"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_1 = require("./credentials");
describe('Credentials', () => {
    describe('base64Encoded()', () => {
        test('should return base64-encoded credentials', () => {
            const credentials = new credentials_1.Credentials({ tenant: 'tenant', email: 'name@tenant.com', token: 'password' });
            expect(credentials.base64Encoded).toBe('dGVuYW50fG5hbWVAdGVuYW50LmNvbTpwYXNzd29yZA==');
        });
    });
});

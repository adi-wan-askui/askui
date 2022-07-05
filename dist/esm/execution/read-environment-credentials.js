import { logger } from '../lib';
export function envCredentials() {
    const envToken = process.env['ASKUI_TOKEN'];
    const envTenant = process.env['ASKUI_TENANT'];
    const envEmail = process.env['ASKUI_EMAIL'];
    if (envToken && envTenant && envEmail) {
        logger.info('Credentials are used from ENV variables: ASKUI_TOKEN, ASKUI_TENANT and ASKUI_EMAIL');
        return {
            tenant: envTenant,
            email: envEmail,
            token: envToken,
        };
    }
    return undefined;
}

export interface CredentialArgs {
    tenant: string;
    email: string;
    token: string;
}
export declare class Credentials {
    private credentials;
    constructor(credentials: CredentialArgs);
    get base64Encoded(): string;
    private get buffered();
    private get userName();
}

import { OptionsOfJSONResponseBody } from 'got';
import { CredentialArgs } from './credentials';
export declare class HttpClientGot {
    readonly credentialArgs?: CredentialArgs | undefined;
    readonly customHeaders?: Record<string, string> | undefined;
    private headers;
    constructor(credentialArgs?: CredentialArgs | undefined, customHeaders?: Record<string, string> | undefined);
    private initHeaders;
    private injectHeaders;
    post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T>;
    get<T>(url: string, options?: OptionsOfJSONResponseBody): Promise<T>;
}

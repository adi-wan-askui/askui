import { HttpClientError } from './http-client-error';
export { GeneralHttpClientError } from './general-http-client-error';
export declare function httpClientErrorHandler(responseCode: number, errorMessage: string): HttpClientError;

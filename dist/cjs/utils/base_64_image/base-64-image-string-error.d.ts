import { Base64ImageError } from './base-64-image-error';
export declare class Base64ImageStringError extends Base64ImageError {
    constructor(str: string, prefix: string);
}

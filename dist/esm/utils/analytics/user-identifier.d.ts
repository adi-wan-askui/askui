import { UserIdentifierInterface } from './user-identifier-interface';
export declare class UserIdentifier implements UserIdentifierInterface {
    userId(): Promise<string>;
}

export declare abstract class InstallationTimestamp {
    private static fileName;
    private static value?;
    static create(): Promise<void>;
    static get(): Promise<Date | null>;
    private static getFromFile;
}

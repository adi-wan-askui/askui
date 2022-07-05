declare enum SupportedPlatform {
    LINUX = "linux",
    DARWIN = "darwin",
    WIN32 = "win32"
}
export declare function platform(): SupportedPlatform;
export declare function getBinaryPath(version: string): string;
export declare function downloadServerBinaries(binaryVersion: string): Promise<void>;
export {};

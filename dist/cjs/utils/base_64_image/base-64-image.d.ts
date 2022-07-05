/// <reference types="node" />
export declare class Base64Image {
    private readonly aSharp;
    private info;
    private buffer;
    static readonly strPrefix = "data:image/png;base64,";
    private constructor();
    private static fromSharp;
    static fromPathOrString(pathOrStr: string): Promise<Base64Image>;
    static fromPath(path: string): Promise<Base64Image>;
    static fromString(str: string): Promise<Base64Image>;
    static fromBuffer(buffer: Buffer): Promise<Base64Image>;
    get width(): number;
    get height(): number;
    resizeToFitInto(dimension: number): Promise<Base64Image>;
    toString(): string;
    toBuffer(): Buffer;
}

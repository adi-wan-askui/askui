import { CustomElementJson } from './custom-element-json';
export declare class CustomElement implements CustomElementJson {
    customImage: string;
    name?: string | undefined;
    threshold?: number | undefined;
    rotationDegreePerStep?: number | undefined;
    imageCompareFormat?: "RGB" | "grayscale" | undefined;
    mask?: {
        x: number;
        y: number;
    }[] | undefined;
    private static schema;
    constructor(customImage: string, name?: string | undefined, threshold?: number | undefined, rotationDegreePerStep?: number | undefined, imageCompareFormat?: "RGB" | "grayscale" | undefined, mask?: {
        x: number;
        y: number;
    }[] | undefined);
    static fromJsonListWithImagePathOrImage(ceJson?: CustomElementJson[]): Promise<CustomElement[]>;
    static fromJsonWithImagePathOrImage(ceJson: CustomElementJson): Promise<CustomElement>;
    static fromJson(ceJson: CustomElementJson): CustomElement;
    validate(): void;
}

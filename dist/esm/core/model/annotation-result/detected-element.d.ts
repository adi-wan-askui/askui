import { BoundingBox } from './boundary-box';
export declare class DetectedElement {
    name: string;
    truncated: number;
    difficult: number;
    text: string;
    colors: string[];
    bndbox: BoundingBox;
    constructor(name: string, truncated: number, difficult: number, text: string, colors: string[], bndbox: BoundingBox);
    static fromJson(detectedElement: DetectedElement, resizeRatio?: number): DetectedElement;
}

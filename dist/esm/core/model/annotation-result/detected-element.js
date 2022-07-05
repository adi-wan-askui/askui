import { BoundingBox } from './boundary-box';
export class DetectedElement {
    constructor(name, truncated, difficult, text, colors, bndbox) {
        this.name = name;
        this.truncated = truncated;
        this.difficult = difficult;
        this.text = text;
        this.colors = colors;
        this.bndbox = bndbox;
    }
    static fromJson(detectedElement, resizeRatio = 1) {
        return new DetectedElement(detectedElement.name, detectedElement.truncated, detectedElement.difficult, detectedElement.text, detectedElement.colors, BoundingBox.fromJson(detectedElement.bndbox, resizeRatio));
    }
}

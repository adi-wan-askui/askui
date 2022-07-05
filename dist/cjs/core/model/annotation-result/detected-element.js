"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedElement = void 0;
const boundary_box_1 = require("./boundary-box");
class DetectedElement {
    constructor(name, truncated, difficult, text, colors, bndbox) {
        this.name = name;
        this.truncated = truncated;
        this.difficult = difficult;
        this.text = text;
        this.colors = colors;
        this.bndbox = bndbox;
    }
    static fromJson(detectedElement, resizeRatio = 1) {
        return new DetectedElement(detectedElement.name, detectedElement.truncated, detectedElement.difficult, detectedElement.text, detectedElement.colors, boundary_box_1.BoundingBox.fromJson(detectedElement.bndbox, resizeRatio));
    }
}
exports.DetectedElement = DetectedElement;

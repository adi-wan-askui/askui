"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundingBox = void 0;
class BoundingBox {
    constructor(xmin, ymin, xmax, ymax) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
    static fromJson(boundinBox, resizeRatio = 1) {
        return new BoundingBox(boundinBox.xmin * resizeRatio, boundinBox.ymin * resizeRatio, boundinBox.xmax * resizeRatio, boundinBox.ymax * resizeRatio);
    }
}
exports.BoundingBox = BoundingBox;

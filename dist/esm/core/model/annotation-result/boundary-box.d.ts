export declare class BoundingBox {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    constructor(xmin: number, ymin: number, xmax: number, ymax: number);
    static fromJson(boundinBox: BoundingBox, resizeRatio?: number): BoundingBox;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveAnnotationRequest = void 0;
class InteractiveAnnotationRequest {
    constructor(boundingBoxes, imageString) {
        this.msgName = InteractiveAnnotationRequest.msgName;
        this.boundingBoxes = boundingBoxes;
        this.imageString = imageString;
    }
}
exports.InteractiveAnnotationRequest = InteractiveAnnotationRequest;
InteractiveAnnotationRequest.msgName = 'START_INTERACTIVE_ANNOTATION_REQUEST';

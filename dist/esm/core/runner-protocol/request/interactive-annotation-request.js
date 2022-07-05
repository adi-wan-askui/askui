export class InteractiveAnnotationRequest {
    constructor(boundingBoxes, imageString) {
        this.msgName = InteractiveAnnotationRequest.msgName;
        this.boundingBoxes = boundingBoxes;
        this.imageString = imageString;
    }
}
InteractiveAnnotationRequest.msgName = 'START_INTERACTIVE_ANNOTATION_REQUEST';

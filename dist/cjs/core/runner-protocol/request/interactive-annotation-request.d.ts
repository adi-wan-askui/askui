import { DetectedElement } from '../../model/annotation-result/detected-element';
import { RunnerProtocolRequest } from './runner-protocol-request';
export declare class InteractiveAnnotationRequest implements RunnerProtocolRequest {
    static msgName: string;
    boundingBoxes: DetectedElement[];
    imageString: string;
    msgName: string;
    constructor(boundingBoxes: DetectedElement[], imageString: string);
}

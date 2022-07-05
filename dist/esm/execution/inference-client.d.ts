import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
export declare class InferenceClient {
    url: string;
    httpClient: HttpClientGot;
    constructor(url: string, httpClient: HttpClientGot);
    isImageRequired(instruction: string): Promise<boolean>;
    private resizeIfNeeded;
    predictControlCommand(instruction: string, customElements?: CustomElement[], image?: string): Promise<ControlCommand>;
    predictImageAnnotation(image: string, customElements?: CustomElement[]): Promise<Annotation>;
}

import { JSDOM } from 'jsdom';
export declare abstract class AnnotationWriter {
    static write(html: JSDOM, outputFolder?: string, fileNamePrefix?: string): void;
}

import { JSDOM } from 'jsdom';
import { DetectedElement } from '../model/annotation-result/detected-element';
import { AnnotationJson } from './annotation-json';
export declare class Annotation {
    image: string;
    objects: DetectedElement[];
    constructor(image: string, objects?: DetectedElement[]);
    toHtml(): JSDOM;
    static fromJson(json: AnnotationJson, resizeRatio?: number): Annotation;
    private static getHtmlTemplate;
}

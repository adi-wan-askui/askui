import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { DetectedElement } from '../model/annotation-result/detected-element';
export class Annotation {
    constructor(image, objects = []) {
        this.image = image;
        this.objects = objects;
    }
    toHtml() {
        const template = Annotation.getHtmlTemplate();
        const script = template.window.document.createElement('script');
        script.innerHTML = `
      var el = document.getElementsByTagName("bounding-box-renderer");
      el[0].setAttribute("shouldrenderimage", true);
      el[0].setAttribute("imagestr", "${this.image.trim()}"); 
      el[0].setAttribute("detectedobjects", JSON.stringify(${JSON.stringify(this.objects)}));
    `;
        template.window.document.body.appendChild(script);
        return template;
    }
    static fromJson(json, resizeRatio = 1) {
        return new Annotation(json.image, json.objects.map((object) => DetectedElement.fromJson(object, resizeRatio)));
    }
    static getHtmlTemplate() {
        const templatePath = path.join(__dirname, 'template.html');
        return new JSDOM(fs.readFileSync(templatePath, 'utf8'));
    }
}

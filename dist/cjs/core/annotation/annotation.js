"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotation = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const jsdom_1 = require("jsdom");
const detected_element_1 = require("../model/annotation-result/detected-element");
class Annotation {
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
        return new Annotation(json.image, json.objects.map((object) => detected_element_1.DetectedElement.fromJson(object, resizeRatio)));
    }
    static getHtmlTemplate() {
        const templatePath = path_1.default.join(__dirname, 'template.html');
        return new jsdom_1.JSDOM(fs_1.default.readFileSync(templatePath, 'utf8'));
    }
}
exports.Annotation = Annotation;

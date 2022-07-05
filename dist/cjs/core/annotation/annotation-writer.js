"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationWriter = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../../lib/logger");
class AnnotationWriter {
    static write(html, outputFolder = 'report', fileNamePrefix = 'annotation') {
        const currentDateTime = new Date();
        const formattedTime = `${currentDateTime.getDay()}-${currentDateTime.getMonth()}`
            + `-${currentDateTime.getFullYear()}_${currentDateTime.getHours()}`
            + `-${currentDateTime.getMinutes()}-${currentDateTime.getSeconds()}`;
        const fileName = `${fileNamePrefix}_${formattedTime}.html`;
        const outputFilePath = path_1.default.join(outputFolder, fileName);
        if (!(fs_1.default.existsSync(outputFolder))) {
            fs_1.default.mkdirSync(outputFolder, { recursive: true });
        }
        fs_1.default.writeFileSync(outputFilePath, html.serialize());
        logger_1.logger.info(`Annotation saved under "${outputFilePath}".`);
    }
}
exports.AnnotationWriter = AnnotationWriter;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferenceClient = void 0;
const url_join_1 = __importDefault(require("url-join"));
const ui_control_commands_1 = require("../core/ui-control-commands");
const annotation_1 = require("../core/annotation/annotation");
const transformations_1 = require("../utils/transformations");
class InferenceClient {
    constructor(url, httpClient) {
        this.url = url;
        this.httpClient = httpClient;
    }
    isImageRequired(instruction) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, url_join_1.default)(this.url, 'instruction', 'is-image-required');
            const httpBody = {
                instruction,
            };
            const httpResponse = yield this.httpClient.post(url, httpBody);
            return httpResponse.isImageRequired;
        });
    }
    // eslint-disable-next-line class-methods-use-this
    resizeIfNeeded(customElements, image) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(image) || customElements.length > 0) {
                return { base64Image: image, resizeRatio: 1 };
            }
            return (0, transformations_1.resizeBase64ImageWithSameRatio)(image);
        });
    }
    predictControlCommand(instruction, customElements = [], image) {
        return __awaiter(this, void 0, void 0, function* () {
            const resizedImage = yield this.resizeIfNeeded(customElements, image);
            const httpBody = {
                image: resizedImage.base64Image,
                instruction,
                customElements,
            };
            const url = (0, url_join_1.default)(this.url, 'api', 'v1', 'predict-command');
            const httpResponse = yield this.httpClient.post(url, httpBody);
            return ui_control_commands_1.ControlCommand.fromJson(httpResponse, resizedImage.resizeRatio);
        });
    }
    predictImageAnnotation(image, customElements = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const resizedImage = yield this.resizeIfNeeded(customElements, image);
            const httpBody = {
                image: resizedImage.base64Image,
                customElements,
            };
            const url = (0, url_join_1.default)(this.url, 'annotate', '?format=json');
            const httpResponse = yield this.httpClient.post(url, httpBody);
            return annotation_1.Annotation.fromJson(Object.assign(Object.assign({}, httpResponse), { image }), resizedImage.resizeRatio);
        });
    }
}
exports.InferenceClient = InferenceClient;

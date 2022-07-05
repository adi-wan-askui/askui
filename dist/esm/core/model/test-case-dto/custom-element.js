var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { array, number, object, ValidationError, } from 'yup';
import { Base64Image } from '../../../utils/base_64_image/base-64-image';
export class CustomElement {
    constructor(customImage, name, threshold, rotationDegreePerStep, imageCompareFormat, mask) {
        this.customImage = customImage;
        this.name = name;
        this.threshold = threshold;
        this.rotationDegreePerStep = rotationDegreePerStep;
        this.imageCompareFormat = imageCompareFormat;
        this.mask = mask;
    }
    static fromJsonListWithImagePathOrImage(ceJson = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(ceJson.map((customElement) => CustomElement.fromJsonWithImagePathOrImage(customElement)));
        });
    }
    static fromJsonWithImagePathOrImage(ceJson) {
        return __awaiter(this, void 0, void 0, function* () {
            const customImage = (yield Base64Image.fromPathOrString(ceJson.customImage)).toString();
            const customElement = CustomElement.fromJson(Object.assign(Object.assign({}, ceJson), { customImage }));
            customElement.validate();
            return customElement;
        });
    }
    static fromJson(ceJson) {
        return new CustomElement(ceJson.customImage, ceJson.name, ceJson.threshold, ceJson.rotationDegreePerStep, ceJson.imageCompareFormat, ceJson.mask);
    }
    validate() {
        try {
            CustomElement.schema.validateSync(this, { abortEarly: false, strict: true });
        }
        catch (e) { // ValidationError
            throw new ValidationError(e.errors.join(', '));
        }
    }
}
CustomElement.schema = object({
    threshold: number().optional().min(0).max(1),
    rotationDegreePerStep: number().optional().min(0).lessThan(360),
    mask: array().optional().min(3, 'mask must contain at least 3 points'),
});

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeBase64ImageWithSameRatio = void 0;
const lib_1 = require("../lib");
const base_64_image_1 = require("./base_64_image/base-64-image");
const image_resize_errors_1 = require("./image-resize-errors");
/**
  * Resizes a base64image only when the height or the width is bigger than the maxEdge Param,so that
  * the returned image keeps the same aspect ratio but have a max size equal to the threshold.
  *
  * @param {string} base64ImageString - A base64 encoded image
  * @param {number} maxEdge - A max image height or width, if excceded, the image will be resized
  *
  * @returns {Promise<ResizedImage>} ResiziedImage Interface,
  * the true pixel values = controlui-api response * resizeRatio.
  */
function resizeBase64ImageWithSameRatio(base64ImageString, maxEdge = 1400) {
    return __awaiter(this, void 0, void 0, function* () {
        lib_1.logger.debug('Image resizing');
        try {
            const image = yield base_64_image_1.Base64Image.fromString(base64ImageString);
            if (image.height <= maxEdge && image.width <= maxEdge) {
                return { base64Image: base64ImageString, resizeRatio: 1 };
            }
            const resizedImage = yield image.resizeToFitInto(maxEdge);
            return {
                base64Image: resizedImage.toString(),
                resizeRatio: image.width / resizedImage.width,
            };
        }
        catch (error) {
            throw new image_resize_errors_1.ImageResizingError(`A Problem has occured during the resizing of the image. Error: ${error}`);
        }
    });
}
exports.resizeBase64ImageWithSameRatio = resizeBase64ImageWithSameRatio;

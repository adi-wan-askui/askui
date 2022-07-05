var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { logger } from '../lib';
import { Base64Image } from './base_64_image/base-64-image';
import { ImageResizingError } from './image-resize-errors';
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
export function resizeBase64ImageWithSameRatio(base64ImageString, maxEdge = 1400) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('Image resizing');
        try {
            const image = yield Base64Image.fromString(base64ImageString);
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
            throw new ImageResizingError(`A Problem has occured during the resizing of the image. Error: ${error}`);
        }
    });
}

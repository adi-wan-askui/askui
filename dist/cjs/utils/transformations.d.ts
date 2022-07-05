import { ResizedImage } from './resized-image-interface';
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
export declare function resizeBase64ImageWithSameRatio(base64ImageString: string, maxEdge?: number): Promise<ResizedImage>;

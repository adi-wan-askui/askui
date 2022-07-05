var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sharp from 'sharp';
import { Base64ImageStringError } from './base-64-image-string-error';
export class Base64Image {
    constructor(aSharp, info, buffer) {
        this.aSharp = aSharp;
        this.info = info;
        this.buffer = buffer;
    }
    static fromSharp(s) {
        return __awaiter(this, void 0, void 0, function* () {
            const { info, data } = yield s.toBuffer({ resolveWithObject: true });
            return new Base64Image(s, info, data);
        });
    }
    static fromPathOrString(pathOrStr) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Base64Image.fromString(pathOrStr);
            }
            catch (error) {
                if (!(error instanceof Base64ImageStringError)) {
                    throw error;
                }
            }
            return Base64Image.fromPath(pathOrStr);
        });
    }
    static fromPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return Base64Image.fromSharp(sharp(path));
        });
    }
    static fromString(str) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!str.startsWith(Base64Image.strPrefix)) {
                throw new Base64ImageStringError(str, Base64Image.strPrefix);
            }
            const data = str.substring(Base64Image.strPrefix.length);
            return Base64Image.fromSharp(sharp(Buffer.from(data, 'base64')));
        });
    }
    static fromBuffer(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            return Base64Image.fromSharp(sharp(buffer));
        });
    }
    get width() {
        return this.info.width;
    }
    get height() {
        return this.info.height;
    }
    resizeToFitInto(dimension) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield this.aSharp.resize({
                width: this.width >= this.height ? dimension : undefined,
                height: this.height > this.width ? dimension : undefined,
                fit: sharp.fit.contain,
            }).toBuffer();
            return Base64Image.fromBuffer(buffer);
        });
    }
    toString() {
        return `${Base64Image.strPrefix}${this.buffer.toString('base64')}`;
    }
    toBuffer() {
        return this.buffer;
    }
}
Base64Image.strPrefix = 'data:image/png;base64,';

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadServerBinaries = exports.getBinaryPath = exports.platform = void 0;
const fs_1 = __importDefault(require("fs"));
const got_1 = __importDefault(require("got"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const path_2 = require("../utils/path");
const logger_1 = require("./logger");
var SupportedPlatform;
(function (SupportedPlatform) {
    SupportedPlatform["LINUX"] = "linux";
    SupportedPlatform["DARWIN"] = "darwin";
    SupportedPlatform["WIN32"] = "win32";
})(SupportedPlatform || (SupportedPlatform = {}));
const binarySubPathsByPlatform = {
    linux: ['linux', 'askui-ui-controller.AppImage'],
    darwin: ['darwin', 'askui-ui-controller.dmg'],
    win32: ['windows', 'askui-ui-controller.exe'],
};
function isSupportedPlatform(value) {
    return Object.values(SupportedPlatform).includes(value);
}
function platform() {
    const pf = os_1.default.platform();
    if (isSupportedPlatform(pf)) {
        return pf;
    }
    throw new Error(`Platform "${pf}" is not supported.`);
}
exports.platform = platform;
function buildBinaryNotAvailbleError(binaryVersion) {
    return new Error(`It seems that the UI Controller version "${binaryVersion}" for your system "${platform()} ${os_1.default.arch}" is not availble, Please contact as at info@askui.com for more information`);
}
function getBinaryPath(version) {
    return path_1.default.join((0, path_2.getPathToNodeModulesRoot)(), 'release', version, ...binarySubPathsByPlatform[platform()]);
}
exports.getBinaryPath = getBinaryPath;
function getBinaryDownloadUrl(binaryVersion) {
    const baseUrl = `https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/${binaryVersion}`;
    const arch = os_1.default.arch();
    return `${baseUrl}/${platform()}/${arch}/${binarySubPathsByPlatform[platform()][1]}`;
}
function downloadServerBinaries(binaryVersion) {
    return new Promise((resolve, reject) => {
        const url = getBinaryDownloadUrl(binaryVersion);
        const binaryOutputPath = getBinaryPath(binaryVersion);
        const binaryFolder = path_1.default.dirname(binaryOutputPath);
        logger_1.logger.info(`Start downloading UI Controller version "${binaryVersion}"`);
        if (!(fs_1.default.existsSync(binaryFolder))) {
            fs_1.default.mkdirSync(binaryFolder, { recursive: true });
        }
        const downloadStream = got_1.default.stream(url);
        const fileWriterStream = fs_1.default.createWriteStream(binaryOutputPath);
        downloadStream.on('error', () => {
            reject();
            fs_1.default.unlink(binaryOutputPath, (err) => { logger_1.logger.error(err); });
            throw buildBinaryNotAvailbleError(binaryVersion);
        });
        fileWriterStream
            .on('error', () => {
            fs_1.default.unlink(binaryOutputPath, () => { });
            reject(new Error('oops, an error during the downloaded occurred, try again with fresh install'));
        })
            .on('finish', () => {
            logger_1.logger.info(`UI Controller version ${binaryVersion} for your system "${platform()} ${os_1.default.arch}" was downloaded`);
            logger_1.logger.debug(`Binary of UI Controller is located at "${binaryOutputPath}".`);
            resolve();
        });
        downloadStream.pipe(fileWriterStream);
    });
}
exports.downloadServerBinaries = downloadServerBinaries;

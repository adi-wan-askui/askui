import fs from 'fs';
import got from 'got';
import os from 'os';
import path from 'path';
import { getPathToNodeModulesRoot } from '../utils/path';
import { logger } from './logger';
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
export function platform() {
    const pf = os.platform();
    if (isSupportedPlatform(pf)) {
        return pf;
    }
    throw new Error(`Platform "${pf}" is not supported.`);
}
function buildBinaryNotAvailbleError(binaryVersion) {
    return new Error(`It seems that the UI Controller version "${binaryVersion}" for your system "${platform()} ${os.arch}" is not availble, Please contact as at info@askui.com for more information`);
}
export function getBinaryPath(version) {
    return path.join(getPathToNodeModulesRoot(), 'release', version, ...binarySubPathsByPlatform[platform()]);
}
function getBinaryDownloadUrl(binaryVersion) {
    const baseUrl = `https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/${binaryVersion}`;
    const arch = os.arch();
    return `${baseUrl}/${platform()}/${arch}/${binarySubPathsByPlatform[platform()][1]}`;
}
export function downloadServerBinaries(binaryVersion) {
    return new Promise((resolve, reject) => {
        const url = getBinaryDownloadUrl(binaryVersion);
        const binaryOutputPath = getBinaryPath(binaryVersion);
        const binaryFolder = path.dirname(binaryOutputPath);
        logger.info(`Start downloading UI Controller version "${binaryVersion}"`);
        if (!(fs.existsSync(binaryFolder))) {
            fs.mkdirSync(binaryFolder, { recursive: true });
        }
        const downloadStream = got.stream(url);
        const fileWriterStream = fs.createWriteStream(binaryOutputPath);
        downloadStream.on('error', () => {
            reject();
            fs.unlink(binaryOutputPath, (err) => { logger.error(err); });
            throw buildBinaryNotAvailbleError(binaryVersion);
        });
        fileWriterStream
            .on('error', () => {
            fs.unlink(binaryOutputPath, () => { });
            reject(new Error('oops, an error during the downloaded occurred, try again with fresh install'));
        })
            .on('finish', () => {
            logger.info(`UI Controller version ${binaryVersion} for your system "${platform()} ${os.arch}" was downloaded`);
            logger.debug(`Binary of UI Controller is located at "${binaryOutputPath}".`);
            resolve();
        });
        downloadStream.pipe(fileWriterStream);
    });
}

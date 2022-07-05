var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawn } from 'child_process';
import fs from 'fs-extra';
import waitPort from 'wait-port';
import fkill from 'fkill';
import os from 'os';
import path from 'path';
import { createArgsWithDefaults, createCliFlagsFromArgs, } from './ui-controller-args';
import { downloadServerBinaries, getBinaryPath } from './download-binaries';
import { logger } from './logger';
import { TimeoutError } from './timeout-error';
import { UnkownError } from './unkown-error';
export class UiControllerFacade {
    constructor() {
        this.binaryPath = getBinaryPath('latest');
        this.DefaultmaxWaitingForStartingInMs = 30 * 1000;
    }
    start(args, maxWaitingForStartingInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.runPreStartChecks();
            const argsWithDefaults = createArgsWithDefaults(args);
            const argsWithLogPath = this.serverLogFilePath(argsWithDefaults);
            this.binaryPath = getBinaryPath(argsWithLogPath.binaryVersion);
            yield this.getBinary(argsWithLogPath.binaryVersion, argsWithLogPath.overWriteBinary);
            this.makeBinaryExecutable();
            logger.debug(`UI Controller log path "${this.serverLogFile}"`);
            yield this.startWithDefaults(argsWithLogPath, maxWaitingForStartingInSeconds);
        });
    }
    stop(args, forceStop) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const argsWithDefaults = createArgsWithDefaults(args);
                yield this.killPort(argsWithDefaults.port, forceStop);
            }
            catch (err) {
                throw new Error(`An unknown error occured while closing of the UI Controller. Log file: "${this.serverLogFile}". ErrorReason: ${err}`);
            }
        });
    }
    serverLogFilePath(args) {
        if (args === null || args === void 0 ? void 0 : args.logFilePath) {
            this.serverLogFile = args.logFilePath;
            return args;
        }
        const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'askui'));
        this.serverLogFile = path.join(tmpDir, 'askui-ui-controller.log');
        const argPath = { logFilePath: this.serverLogFile };
        return Object.assign(argPath, args);
    }
    // eslint-disable-next-line class-methods-use-this
    killPort(port, forceStop) {
        return fkill(`:${port}`, {
            force: forceStop || false,
            silent: true,
        });
    }
    getStartingCommand() {
        return `"${this.binaryPath}"`;
    }
    // eslint-disable-next-line class-methods-use-this
    makeBinaryExecutable() {
        /* Executable out of the box */
    }
    // eslint-disable-next-line class-methods-use-this
    runPreStartChecks() {
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    waitUntilStarted(args, maxWaitingForStartingInSeconds) {
        return new Promise((resolve, reject) => {
            try {
                const timeoutInMs = maxWaitingForStartingInSeconds
                    ? maxWaitingForStartingInSeconds * 1000 : this.DefaultmaxWaitingForStartingInMs;
                waitPort({
                    host: args.host,
                    port: args.port,
                    timeout: timeoutInMs,
                    output: (process === null || process === void 0 ? void 0 : process.env['LOG_LEVEL']) === 'verbose' ? 'dots' : 'silent',
                }).then((open) => {
                    if (open) {
                        logger.info('The Control UI Server has been started.');
                        return resolve();
                    }
                    return reject(new TimeoutError('Starting time limit has been reached'));
                });
            }
            catch (err) {
                reject(new UnkownError(`An unknown error occured while waiting for the UI Controller: ${err}`));
            }
        });
    }
    isBinaryValid() {
        const sizeThresholdInMB = 100;
        const binarysizeInMB = fs.statSync(this.binaryPath).size / (1024 * 1024);
        return binarysizeInMB > sizeThresholdInMB;
    }
    getBinary(binaryVersion, overWriteBinary = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs.existsSync(this.binaryPath) || overWriteBinary || !this.isBinaryValid()) {
                logger.debug(`Currently, no binary of the UI Controller is available at "${this.binaryPath}"`);
                yield downloadServerBinaries(binaryVersion);
            }
            else {
                logger.debug(`Binary of UI Controller is already present at "${this.binaryPath}".`);
            }
        });
    }
    startWithDefaults(args, maxWaitingForStartingInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.debug('Starting the UI Controller...');
                spawn(this.getStartingCommand(), createCliFlagsFromArgs(args), { shell: true });
                yield this.waitUntilStarted(args, maxWaitingForStartingInSeconds);
            }
            catch (err) {
                throw new Error(`The UI Controller could not be started. Log file :  ${this.serverLogFile}. ErrorReason: ${err}
      Check this website for more information: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems`);
            }
        });
    }
}

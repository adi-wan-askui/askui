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
exports.UiControllerFacade = void 0;
const child_process_1 = require("child_process");
const fs_extra_1 = __importDefault(require("fs-extra"));
const wait_port_1 = __importDefault(require("wait-port"));
const fkill_1 = __importDefault(require("fkill"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const ui_controller_args_1 = require("./ui-controller-args");
const download_binaries_1 = require("./download-binaries");
const logger_1 = require("./logger");
const timeout_error_1 = require("./timeout-error");
const unkown_error_1 = require("./unkown-error");
class UiControllerFacade {
    constructor() {
        this.binaryPath = (0, download_binaries_1.getBinaryPath)('latest');
        this.DefaultmaxWaitingForStartingInMs = 30 * 1000;
    }
    start(args, maxWaitingForStartingInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.runPreStartChecks();
            const argsWithDefaults = (0, ui_controller_args_1.createArgsWithDefaults)(args);
            const argsWithLogPath = this.serverLogFilePath(argsWithDefaults);
            this.binaryPath = (0, download_binaries_1.getBinaryPath)(argsWithLogPath.binaryVersion);
            yield this.getBinary(argsWithLogPath.binaryVersion, argsWithLogPath.overWriteBinary);
            this.makeBinaryExecutable();
            logger_1.logger.debug(`UI Controller log path "${this.serverLogFile}"`);
            yield this.startWithDefaults(argsWithLogPath, maxWaitingForStartingInSeconds);
        });
    }
    stop(args, forceStop) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const argsWithDefaults = (0, ui_controller_args_1.createArgsWithDefaults)(args);
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
        const tmpDir = fs_extra_1.default.mkdtempSync(path_1.default.join(os_1.default.tmpdir(), 'askui'));
        this.serverLogFile = path_1.default.join(tmpDir, 'askui-ui-controller.log');
        const argPath = { logFilePath: this.serverLogFile };
        return Object.assign(argPath, args);
    }
    // eslint-disable-next-line class-methods-use-this
    killPort(port, forceStop) {
        return (0, fkill_1.default)(`:${port}`, {
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
                (0, wait_port_1.default)({
                    host: args.host,
                    port: args.port,
                    timeout: timeoutInMs,
                    output: (process === null || process === void 0 ? void 0 : process.env['LOG_LEVEL']) === 'verbose' ? 'dots' : 'silent',
                }).then((open) => {
                    if (open) {
                        logger_1.logger.info('The Control UI Server has been started.');
                        return resolve();
                    }
                    return reject(new timeout_error_1.TimeoutError('Starting time limit has been reached'));
                });
            }
            catch (err) {
                reject(new unkown_error_1.UnkownError(`An unknown error occured while waiting for the UI Controller: ${err}`));
            }
        });
    }
    isBinaryValid() {
        const sizeThresholdInMB = 100;
        const binarysizeInMB = fs_extra_1.default.statSync(this.binaryPath).size / (1024 * 1024);
        return binarysizeInMB > sizeThresholdInMB;
    }
    getBinary(binaryVersion, overWriteBinary = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs_extra_1.default.existsSync(this.binaryPath) || overWriteBinary || !this.isBinaryValid()) {
                logger_1.logger.debug(`Currently, no binary of the UI Controller is available at "${this.binaryPath}"`);
                yield (0, download_binaries_1.downloadServerBinaries)(binaryVersion);
            }
            else {
                logger_1.logger.debug(`Binary of UI Controller is already present at "${this.binaryPath}".`);
            }
        });
    }
    startWithDefaults(args, maxWaitingForStartingInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.debug('Starting the UI Controller...');
                (0, child_process_1.spawn)(this.getStartingCommand(), (0, ui_controller_args_1.createCliFlagsFromArgs)(args), { shell: true });
                yield this.waitUntilStarted(args, maxWaitingForStartingInSeconds);
            }
            catch (err) {
                throw new Error(`The UI Controller could not be started. Log file :  ${this.serverLogFile}. ErrorReason: ${err}
      Check this website for more information: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems`);
            }
        });
    }
}
exports.UiControllerFacade = UiControllerFacade;

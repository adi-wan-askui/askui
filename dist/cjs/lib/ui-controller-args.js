"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCliFlagsFromArgs = exports.createArgsWithDefaults = void 0;
function createArgsWithDefaults(args) {
    const defaults = {
        binaryVersion: 'latest',
        display: 0,
        overWriteBinary: false,
        minimize: true,
        port: 6769,
        host: '127.0.0.1',
        logLevel: 'debug',
    };
    return Object.assign(defaults, args);
}
exports.createArgsWithDefaults = createArgsWithDefaults;
function createCliFlagsFromArgs(args) {
    return [
        `-d ${args.display.toString()}`,
        (args === null || args === void 0 ? void 0 : args.port) ? `-p ${args.port.toString()}` : '',
        (args === null || args === void 0 ? void 0 : args.host) ? `--host ${args.host}` : '',
        (args === null || args === void 0 ? void 0 : args.minimize) ? '-m ' : '',
        (args === null || args === void 0 ? void 0 : args.logLevel) ? `--log-level ${args.logLevel}` : '',
        (args === null || args === void 0 ? void 0 : args.logFilePath) ? `--log-file ${args.logFilePath}` : '',
    ].filter((arg) => !!arg);
}
exports.createCliFlagsFromArgs = createCliFlagsFromArgs;

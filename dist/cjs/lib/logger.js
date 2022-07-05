"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const SupportedLogValues = [
    'info',
    'verbose',
    'debug',
    'error',
];
function isProcessEnvLogLevelValid() {
    return SupportedLogValues.includes(process.env['LOG_LEVEL']);
}
const stream = (0, pino_pretty_1.default)({
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname,filename',
});
const defaultLogLevel = 'info';
const pinoLevel = isProcessEnvLogLevelValid() ? process.env['LOG_LEVEL'] : defaultLogLevel;
const logger = (0, pino_1.default)({
    name: 'askuiUiControlClient',
    level: pinoLevel,
    customLevels: {
        verbose: 5,
    },
}, stream);
exports.logger = logger;
if (!(isProcessEnvLogLevelValid()) && process.env['LOG_LEVEL'] !== undefined) {
    logger.warn(`"${process.env['LOG_LEVEL']}" is not supported as log level. Supported log levels: ${SupportedLogValues.join(', ')}`);
    logger.warn(`Starting with the default LOG_LEVEL value "${defaultLogLevel}"`);
}

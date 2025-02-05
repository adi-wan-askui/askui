import pino from 'pino';
import pretty from 'pino-pretty';
const SupportedLogValues = [
    'info',
    'verbose',
    'debug',
    'error',
];
function isProcessEnvLogLevelValid() {
    return SupportedLogValues.includes(process.env['LOG_LEVEL']);
}
const stream = pretty({
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname,filename',
});
const defaultLogLevel = 'info';
const pinoLevel = isProcessEnvLogLevelValid() ? process.env['LOG_LEVEL'] : defaultLogLevel;
const logger = pino({
    name: 'askuiUiControlClient',
    level: pinoLevel,
    customLevels: {
        verbose: 5,
    },
}, stream);
if (!(isProcessEnvLogLevelValid()) && process.env['LOG_LEVEL'] !== undefined) {
    logger.warn(`"${process.env['LOG_LEVEL']}" is not supported as log level. Supported log levels: ${SupportedLogValues.join(', ')}`);
    logger.warn(`Starting with the default LOG_LEVEL value "${defaultLogLevel}"`);
}
export { logger };

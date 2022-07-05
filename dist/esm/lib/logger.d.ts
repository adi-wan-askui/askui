declare const logger: import("pino").Logger<{
    name: string;
    level: string;
    customLevels: {
        verbose: number;
    };
}>;
export { logger };

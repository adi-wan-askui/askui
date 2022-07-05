import { LogLevels } from '../shared/log-levels';
/**
 * Configuration options for the askui UI Controller
 *
 * @param {number} display - Default: `0`
 * You can choose on which display you want to excecute all tests.
 * 0 is your main monitor.
 * If you want to use your second monitor you can change
 * the value to `1` (`2` for your third monitor etc.).
 * @param {string} binaryVersion - Default: `'latest'`
 *  Choose the version of the askui UI Controller Server.
 * @param {number} port - Default: `6769`
 * The port the askui UI Controller is running on.
 * @param {string} host - Default: `'127.0.0.1'`
 * The host the askui UI Controller is running on.
 * @param {boolean} minimize - Default: `true`
 * askui UI Controller will be started as minimized window.
 * @param {boolean} overWriteBinary - Default: `false`
 * Download the provided Version of askui UI Controller.
 * If a version is already downloaded. This version will be overwritten
 * @param {LogLevels} logLevel - Default: `'debug'`
 * You can use different types of Log Level.
 * Options: "fatal", "error", "warn", "info", "debug", "trace", "silent", "verbose".
 * @param {string} logFilePath - Default: `'<temp-dir>/askui/askui-server.log'`
 * It is possible to specify a path for your log files.
 * Per default we create the askui-server.log file and askui folder in your temp folder.
 */
export interface UiControllerArgs {
    readonly display?: number;
    readonly binaryVersion?: string;
    readonly port?: number;
    readonly host?: string;
    readonly minimize?: boolean;
    readonly overWriteBinary?: boolean;
    readonly logLevel?: LogLevels;
    readonly logFilePath?: string;
}
export interface UiControllerArgsWithDefaults extends UiControllerArgs {
    readonly display: number;
    readonly binaryVersion: string;
    readonly overWriteBinary: boolean;
    readonly port: number;
    readonly host: string;
    readonly logLevel?: LogLevels;
}
export declare function createArgsWithDefaults(args?: UiControllerArgs): UiControllerArgsWithDefaults;
export declare function createCliFlagsFromArgs(args: UiControllerArgsWithDefaults): string[];

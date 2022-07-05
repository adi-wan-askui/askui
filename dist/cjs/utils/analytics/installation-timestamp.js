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
exports.InstallationTimestamp = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lib_1 = require("../../lib");
const installation_timestamp_create_error_1 = require("./installation-timestamp-create-error");
const installation_timestamp_get_error_1 = require("./installation-timestamp-get-error");
const path_2 = require("../path");
class InstallationTimestamp {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const timestamp = new Date().toISOString();
            return new Promise((resolve, reject) => {
                fs_1.default.writeFile(InstallationTimestamp.fileName, timestamp, { encoding: 'utf-8' }, (err) => {
                    if (err) {
                        reject(new installation_timestamp_create_error_1.InstallationTimestampCreateError(err));
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    }
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            if (InstallationTimestamp.value === undefined) {
                try {
                    InstallationTimestamp.value = yield this.getFromFile();
                }
                catch (err) {
                    InstallationTimestamp.value = null;
                    lib_1.logger.warn(err.message);
                }
            }
            return InstallationTimestamp.value;
        });
    }
    static getFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(InstallationTimestamp.fileName, 'utf-8', (err, isoDateStr) => {
                    if (err) {
                        reject(new installation_timestamp_get_error_1.InstallationTimestampGetError(err));
                    }
                    else {
                        resolve(new Date(isoDateStr));
                    }
                });
            });
        });
    }
}
exports.InstallationTimestamp = InstallationTimestamp;
InstallationTimestamp.fileName = path_1.default.join((0, path_2.getPathToNodeModulesRoot)(), 'install-timestamp');

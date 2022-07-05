var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import path from 'path';
import { logger } from '../../lib';
import { InstallationTimestampCreateError } from './installation-timestamp-create-error';
import { InstallationTimestampGetError } from './installation-timestamp-get-error';
import { getPathToNodeModulesRoot } from '../path';
export class InstallationTimestamp {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const timestamp = new Date().toISOString();
            return new Promise((resolve, reject) => {
                fs.writeFile(InstallationTimestamp.fileName, timestamp, { encoding: 'utf-8' }, (err) => {
                    if (err) {
                        reject(new InstallationTimestampCreateError(err));
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
                    logger.warn(err.message);
                }
            }
            return InstallationTimestamp.value;
        });
    }
    static getFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs.readFile(InstallationTimestamp.fileName, 'utf-8', (err, isoDateStr) => {
                    if (err) {
                        reject(new InstallationTimestampGetError(err));
                    }
                    else {
                        resolve(new Date(isoDateStr));
                    }
                });
            });
        });
    }
}
InstallationTimestamp.fileName = path.join(getPathToNodeModulesRoot(), 'install-timestamp');

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_2 = require("../utils/path");
const createProgram = () => {
    const program = new commander_1.Command('askui');
    program.usage('<command> [options]');
    return program;
};
function copyExampleProject() {
    const exampleProjectPath = path_1.default.join('example_projects_templates', 'typescript_jest');
    fs_extra_1.default.copySync(path_1.default.join((0, path_2.getPathToNodeModulesRoot)(), exampleProjectPath), '.');
}
function init(argv) {
    const args = argv || process.argv;
    const program = createProgram();
    program
        .command('init')
        .description('creates a typescript example project')
        .action(() => { copyExampleProject(); });
    return program.parse(args);
}
exports.init = init;

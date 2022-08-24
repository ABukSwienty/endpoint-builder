"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("../logger"));
function writeFile(path, name, data) {
    try {
        fs_1.default.writeFileSync(path + "/" + name, data);
        return true;
    }
    catch (error) {
        logger_1.default.fatal(`Could not write ${name} to ${path}!`);
    }
}
exports.default = writeFile;

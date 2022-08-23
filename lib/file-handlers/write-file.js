"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* import logger from "../log/logger"; */
const fs_1 = __importDefault(require("fs"));
function writeFile(path, name, data) {
    try {
        console.log(path, name);
        fs_1.default.writeFileSync(path + "/" + name, data);
        return true;
    }
    catch (error) {
        /* logger.error(`Could not write ${name} to ${path}!`); */
        console.log(error);
        process.exit();
    }
}
exports.default = writeFile;

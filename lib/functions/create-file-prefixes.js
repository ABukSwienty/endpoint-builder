"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const createFilePrefixes = () => {
    if (!constants_1.default.CONFIG["file-prefixes"] ||
        constants_1.default.CONFIG["file-prefixes"].length === 0)
        return "";
    let filePrefixes = "";
    constants_1.default.CONFIG["file-prefixes"].forEach((prefix) => {
        filePrefixes += `${prefix}\n`;
    });
    return filePrefixes;
};
exports.default = createFilePrefixes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const findPath = async (dir = __dirname, needle) => {
    const ls = await fs_1.default.promises.readdir(dir);
    if (ls.includes(needle))
        return path_1.default.join(dir, needle);
    else if (dir === "/")
        return false;
    else
        return findPath(path_1.default.resolve(dir, ".."), needle);
};
exports.default = findPath;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_path_1 = __importDefault(require("./find-path"));
const findAppRoot = async () => {
    const path = await (0, find_path_1.default)(process.cwd(), "node_modules");
    if (!path)
        return false;
    if (path.includes("node_modules")) {
        return path.replace("node_modules", "");
    }
    else {
        return false;
    }
};
exports.default = findAppRoot;

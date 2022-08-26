"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const find_path_1 = __importDefault(require("../file-handlers/find-path"));
const get_content_1 = __importDefault(require("../file-handlers/get-content"));
const getConfig = async (CONFIG_NAME = "endpoint.config.json") => {
    const path = await (0, find_path_1.default)(__dirname, CONFIG_NAME);
    if (!path)
        return false;
    const config = (0, get_content_1.default)(path);
    if (!config)
        return false;
    constants_1.default.ROOT = path.replace(CONFIG_NAME, "");
    return JSON.parse(config);
};
exports.default = getConfig;

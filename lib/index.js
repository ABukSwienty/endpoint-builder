"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_file_1 = __importDefault(require("./file-handlers/write-file"));
const create_endpoint_1 = __importDefault(require("./functions/create-endpoint"));
const init_1 = __importDefault(require("./functions/init"));
const logger_1 = __importDefault(require("./logger"));
const path_1 = __importDefault(require("path"));
const create_file_prefixes_1 = __importDefault(require("./functions/create-file-prefixes"));
const main = async () => {
    try {
        await (0, init_1.default)();
        const endpoint = (0, create_endpoint_1.default)();
        const filePrefixes = (0, create_file_prefixes_1.default)();
        (0, write_file_1.default)(path_1.default.resolve(__dirname, ".."), "index.ts", filePrefixes + "\n" + endpoint);
    }
    catch (error) {
        if (error instanceof Error)
            logger_1.default.fatal("An unknown error occurred: " + error.message);
    }
};
exports.default = main;

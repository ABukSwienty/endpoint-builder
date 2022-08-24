"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_file_1 = __importDefault(require("./file-handlers/write-file"));
const create_endpoint_1 = __importDefault(require("./functions/create-endpoint"));
const init_1 = __importDefault(require("./functions/init"));
const logger_1 = __importDefault(require("./logger"));
const main = async () => {
    try {
        await (0, init_1.default)();
        const endpoint = (0, create_endpoint_1.default)();
        (0, write_file_1.default)("./src-endpoint", "endpoint.ts", endpoint);
        logger_1.default.success("Wrote endpoints!");
        return;
    }
    catch (error) {
        if (error instanceof Error)
            logger_1.default.fatal("An unknown error occurred: " + error.message);
    }
};
exports.default = main;
//# sourceMappingURL=index.js.map
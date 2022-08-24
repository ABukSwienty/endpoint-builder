"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_file_1 = __importDefault(require("./write-file"));
const find_app_root_1 = __importDefault(require("./find-app-root"));
const get_config_1 = __importDefault(require("./get-config"));
const logger_1 = __importDefault(require("../logger"));
const constants_1 = __importDefault(require("../constants"));
const createConfig = async () => {
    try {
        const appPath = await (0, find_app_root_1.default)();
        if (!appPath)
            throw new Error();
        const data = Object.assign(Object.assign({ $schema: "node_modules/endpoint-builder/endpoint.schema.json" }, constants_1.default.CONFIG), { "file-prefixes": [
                'type Example = "an example of prefixing the file with additional types" | string',
            ], endpoints: {
                GET: {
                    suffix: ["id:number", "type:Example"],
                },
                GET_ALL: {},
            }, folders: {
                SRC: {
                    path: "./src",
                },
            }, parents: {
                BACKEND: {
                    "path-type": "string",
                    "include-path-name": false,
                },
                FRONTEND: {
                    "path-type": "function",
                    "include-path-name": true,
                },
            }, paths: ["user", "post"] });
        (0, write_file_1.default)(appPath, "endpoint.config.json", JSON.stringify(data, null, 2));
        return await (0, get_config_1.default)();
    }
    catch (error) {
        logger_1.default.fatal("Could not find root dir! Please create endpoint.config.json manually. \n You can find the config schema here: node_modules/endpoint-builder/endpoint.schema.json");
        return false;
    }
};
exports.default = createConfig;

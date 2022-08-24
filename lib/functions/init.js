"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const create_config_1 = __importDefault(require("../file-handlers/create-config"));
const get_config_1 = __importDefault(require("../file-handlers/get-config"));
const logger_1 = __importDefault(require("../logger"));
const read_folders_1 = __importDefault(require("./read-folders"));
const read_paths_1 = __importDefault(require("./read-paths"));
const init = async () => {
    logger_1.default.message("Looking for endpoint.config.json");
    let config = await (0, get_config_1.default)();
    if (!config) {
        logger_1.default.warning("Attempting to create config...");
        config = await (0, create_config_1.default)();
        if (!config) {
            logger_1.default.fatal("Could not create endpoint.config.json. Please add it manually.");
        }
        else {
            logger_1.default.success(`Created a config file at ${constants_1.default.ROOT}`);
            logger_1.default.message("Added example data to the config file, please fit it to your needs");
            process.exit();
        }
    }
    constants_1.default.CONFIG = Object.assign(Object.assign({}, constants_1.default.CONFIG), config);
    (0, read_folders_1.default)();
    (0, read_paths_1.default)();
    if (Object.keys(constants_1.default.BASE_PATHS).length === 0) {
        logger_1.default.fatal("Error. No paths were added! Check your config settings.");
    }
};
exports.default = init;

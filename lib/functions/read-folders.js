"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = __importDefault(require("../constants"));
const convert_string_to_base_1 = __importDefault(require("../helpers/convert-string-to-base"));
const handlePeriods_1 = __importDefault(require("../helpers/handlePeriods"));
const logger_1 = __importDefault(require("../logger"));
function readFolders() {
    const folders = constants_1.default.CONFIG.folders;
    if (!folders)
        return;
    const baseUri = {};
    logger_1.default.message("Checking folders...");
    let totalFiles = 0;
    for (const [name, { path, exclude: configExclude }] of Object.entries(folders)) {
        const exclude = configExclude ? configExclude : [];
        const dirExists = fs_1.default.existsSync(constants_1.default.ROOT + "/" + path);
        if (!dirExists)
            logger_1.default.fatal(`Could not find folders ${name} path: '${path}'. Please check your endpoint.config.json and make sure the path is relative to where the config file is and does not start with a /`);
        const fileNames = fs_1.default.readdirSync(constants_1.default.ROOT + path);
        totalFiles += fileNames.length;
        logger_1.default.message(`Found ${fileNames.length} files in '${name}'`);
        fileNames.forEach((file) => {
            if (exclude.includes(file))
                return;
            file = (0, handlePeriods_1.default)(file);
            const { key, value } = (0, convert_string_to_base_1.default)(file);
            baseUri[key] = value;
        });
    }
    if (Object.keys(baseUri).length === 0)
        logger_1.default.warning(`No paths were generated from the folders options. Make sure the folders aren't empty or that the path is correct.`);
    if (Object.keys(baseUri).length !== totalFiles)
        logger_1.default.warning(`Found more files then were created for the final endpoint. Filenames must be unique or they will be overwritten`);
    constants_1.default.BASE_PATHS = Object.assign(Object.assign({}, constants_1.default.BASE_PATHS), baseUri);
}
exports.default = readFolders;

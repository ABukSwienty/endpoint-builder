"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../logger"));
const write_file_1 = __importDefault(require("./write-file"));
const copyToCurrDir = () => {
    const copyToPath = constants_1.default.CURR_DIR;
    const copyFromPath = path_1.default.resolve(__dirname, "..", "..", "dist");
    if (!fs_1.default.existsSync(copyFromPath))
        logger_1.default.fatal("Could not find the dist folder.");
    const files = fs_1.default.readdirSync(copyFromPath);
    if (!files || files.length === 0)
        logger_1.default.fatal("Could not find any files to copy.");
    files.forEach((file) => {
        const readFile = fs_1.default.readFileSync(copyFromPath + "/" + file, "utf-8");
        (0, write_file_1.default)(copyToPath, file, readFile);
    });
    logger_1.default.success(`Added files to ${copyToPath}`);
};
exports.default = copyToCurrDir;

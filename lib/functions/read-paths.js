"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const convert_string_to_base_1 = __importDefault(require("../helpers/convert-string-to-base"));
const readPaths = () => {
    const paths = constants_1.default.CONFIG.paths;
    if (!paths)
        return;
    const baseUri = {};
    paths.forEach((path) => {
        const { key, value } = (0, convert_string_to_base_1.default)(path);
        baseUri[key] = value;
    });
    constants_1.default.BASE_PATHS = Object.assign(Object.assign({}, constants_1.default.BASE_PATHS), baseUri);
};
exports.default = readPaths;
//# sourceMappingURL=read-paths.js.map
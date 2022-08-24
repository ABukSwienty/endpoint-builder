"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const convert_string_to_base_1 = __importDefault(require("../helpers/convert-string-to-base"));
const functionToString_1 = __importDefault(require("../helpers/functionToString"));
const suffix_reader_1 = __importDefault(require("../helpers/suffix-reader"));
const logger_1 = __importDefault(require("../logger"));
function createStringEndpointObj(returnTypeFnc = "string", includePathName = false) {
    const endpoints = constants_1.default.CONFIG.endpoints;
    if (!endpoints || Object.keys(endpoints).length === 0) {
        logger_1.default.fatal("No endpoints found!");
    }
    let stringObject = "";
    for (const [path, options] of Object.entries(endpoints)) {
        const exclude = options.exclude
            ? options.exclude.map((value) => (0, convert_string_to_base_1.default)(value).key)
            : false;
        const include = options.include ? options.include : false;
        const excludeAll = options.excludeAll ? options.excludeAll : false;
        const suffix = options.suffix ? options.suffix : "";
        const custom = options.custom ? options.custom : false;
        stringObject += `${path}: {`;
        let count = 0;
        for (const [base, basePath] of Object.entries(constants_1.default.BASE_PATHS)) {
            const prefix = includePathName ? basePath : ``;
            const valueAsString = Array.isArray(suffix)
                ? `${base}: "${prefix}/${(0, suffix_reader_1.default)(suffix).toString}",`
                : `${base}: "${prefix}",`;
            const functionToStringArgs = Array.isArray(suffix)
                ? (0, suffix_reader_1.default)(suffix)
                : undefined;
            let stringKey = returnTypeFnc === "function"
                ? `${base}: ${(0, functionToString_1.default)(includePathName ? basePath : "", functionToStringArgs)},`
                : valueAsString;
            if (!excludeAll) {
                if (include) {
                    if (include.includes(base)) {
                        stringObject += "\n\t" + stringKey;
                    }
                }
                else {
                    if (exclude) {
                        if (!exclude.includes(base)) {
                            stringObject += "\n\t" + stringKey;
                        }
                    }
                    else {
                        stringObject += "\n\t" + stringKey;
                    }
                }
            }
            count++;
        }
        if (custom) {
            for (const [key, suffixes] of Object.entries(custom)) {
                const customUri = key.toLocaleLowerCase().replace("_", "-");
                let customStringKey = returnTypeFnc === "function"
                    ? `${key}: ${(0, functionToString_1.default)(includePathName ? customUri : "", (0, suffix_reader_1.default)(suffixes))},`
                    : `${key}: "${includePathName ? customUri + "/" : ``}${(0, suffix_reader_1.default)(suffixes).toString}",`;
                stringObject += "\n\t" + customStringKey;
            }
        }
        stringObject += "\n},\n";
    }
    return stringObject;
}
exports.default = createStringEndpointObj;
//# sourceMappingURL=create-string-endpoint-obj.js.map
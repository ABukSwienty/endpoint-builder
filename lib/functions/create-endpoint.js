"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const create_base_endpoint_1 = __importDefault(require("./create-base-endpoint"));
const create_string_endpoint_obj_1 = __importDefault(require("./create-string-endpoint-obj"));
const tab_all_1 = __importDefault(require("../helpers/tab-all"));
const create_parents_1 = __importDefault(require("./create-parents"));
const createEndpoint = () => {
    let endpoint = `const ${constants_1.default.CONFIG["const-name"]} = {\n`;
    if (constants_1.default.CONFIG.parents)
        endpoint += (0, tab_all_1.default)((0, create_parents_1.default)(constants_1.default.CONFIG.parents));
    else
        endpoint += (0, tab_all_1.default)((0, create_string_endpoint_obj_1.default)(constants_1.default.CONFIG["path-type"], constants_1.default.CONFIG["include-base-paths"]));
    endpoint += "\r";
    if (constants_1.default.CONFIG["include-base-paths"])
        endpoint += (0, tab_all_1.default)((0, create_base_endpoint_1.default)());
    endpoint += "\n};\n";
    endpoint += `export default ${constants_1.default.CONFIG["const-name"]}`;
    return endpoint;
};
exports.default = createEndpoint;

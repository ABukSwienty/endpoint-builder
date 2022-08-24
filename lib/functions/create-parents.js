"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tab_all_1 = __importDefault(require("../helpers/tab-all"));
const create_string_endpoint_obj_1 = __importDefault(require("./create-string-endpoint-obj"));
const createParents = (parents) => {
    let parentString = "";
    for (const [parent, options] of Object.entries(parents)) {
        parentString += `${parent}: {\n`;
        const paths = (0, create_string_endpoint_obj_1.default)(options["path-type"], options["include-path-name"]);
        parentString += (0, tab_all_1.default)(paths);
        parentString += "\r";
        parentString += `},\n`;
    }
    return parentString;
};
exports.default = createParents;

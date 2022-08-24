"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const createBase = () => {
    let base = "BASE: {";
    for (const [key, uri] of Object.entries(constants_1.default.BASE_PATHS)) {
        base += `\n\t${key}: "${uri}",`;
    }
    base += "\n},";
    return base;
};
exports.default = createBase;
//# sourceMappingURL=create-base-endpoint.js.map
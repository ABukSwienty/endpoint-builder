"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertStringToBase = (string) => ({
    key: string.toUpperCase().replace("-", "_"),
    value: string.toLowerCase(),
});
exports.default = convertStringToBase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlePeriods = (string) => {
    if (string.includes("."))
        return string.slice(0, string.lastIndexOf(".")).replace(".", "-");
    return string;
};
exports.default = handlePeriods;

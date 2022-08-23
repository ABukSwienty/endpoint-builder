"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSuffix = (text) => {
    let suffixWithColon = ":";
    let suffix = "";
    let type = "";
    let addSuffixFlag = true;
    let typeFlag = false;
    for (let index = 0; index < text.length; index++) {
        const character = text[index];
        if (typeFlag)
            type += character;
        if (character === ":") {
            addSuffixFlag = false;
            typeFlag = true;
        }
        if (addSuffixFlag) {
            suffix += character;
            suffixWithColon += character;
        }
    }
    if (type === "")
        type = null;
    return { suffix, type, suffixWithColon };
};
const suffixReader = (strings) => {
    const suffixesWithColon = [];
    const suffixes = [];
    const types = [];
    for (let index = 0; index < strings.length; index++) {
        const { suffix, type, suffixWithColon } = getSuffix(strings[index]);
        suffixes.push(suffix);
        types.push(type);
        suffixesWithColon.push(suffixWithColon);
    }
    if (suffixes.length !== types.length)
        throw new Error("Could not read suffixes");
    return {
        suffixes,
        types,
        suffixesWithColon,
    };
};
exports.default = suffixReader;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const getSuffix = (text) => {
    let slug = "";
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
            slug += character;
        }
    }
    const finalSlug = text.includes(":")
        ? constants_1.default.CONFIG["slug-type"].replace("*slug*", slug)
        : null;
    if (type === "")
        type = null;
    return { suffix, type, slug: finalSlug };
};
const suffixReader = (strings) => {
    const slugs = [];
    const suffixes = [];
    const types = [];
    for (let index = 0; index < strings.length; index++) {
        const { suffix, type, slug } = getSuffix(strings[index]);
        suffixes.push(suffix);
        types.push(type);
        slugs.push(slug);
    }
    if (suffixes.length !== types.length)
        throw new Error("Could not read suffixes");
    const toString = slugs
        .map((value, index) => {
        if (value)
            return value;
        return suffixes[index];
    })
        .join("/");
    return {
        suffixes,
        types,
        slugs,
        toString,
    };
};
exports.default = suffixReader;

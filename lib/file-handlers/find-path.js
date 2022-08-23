"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const findPath = (dir = __dirname, needle) => __awaiter(void 0, void 0, void 0, function* () {
    const ls = yield fs_1.default.promises.readdir(dir);
    if (ls.includes(needle))
        return path_1.default.join(dir, needle);
    else if (dir === "/")
        throw new Error(`Could not find ${needle}`);
    else
        return findPath(path_1.default.resolve(dir, ".."), needle);
});
exports.default = findPath;

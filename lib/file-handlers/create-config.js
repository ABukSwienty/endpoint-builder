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
const find_path_1 = __importDefault(require("./find-path"));
const path_1 = __importDefault(require("path"));
const write_file_1 = __importDefault(require("./write-file"));
const createConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nodePath = yield (0, find_path_1.default)(__dirname, "node_modules");
        const root = path_1.default.resolve(nodePath, "..");
        const data = {
            $schema: process.cwd() + "/schema.json",
            hi: "there",
        };
        (0, write_file_1.default)(root, "endpoint.config.json", JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.log("Could not find root dir!");
    }
});
exports.default = createConfig;

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
const find_path_1 = __importDefault(require("../file-handlers/find-path"));
const get_content_1 = __importDefault(require("../file-handlers/get-content"));
const getConfig = (CONFIG_NAME = "endpoint.config.json") => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = yield (0, find_path_1.default)(__dirname, CONFIG_NAME);
        const config = (0, get_content_1.default)(path);
        return JSON.parse(config);
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
        return false;
    }
});
exports.default = getConfig;

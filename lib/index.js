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
const create_config_1 = __importDefault(require("./file-handlers/create-config"));
const get_config_1 = __importDefault(require("./file-handlers/get-config"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield (0, get_config_1.default)();
    if (!config) {
        console.log("Creating config");
        yield (0, create_config_1.default)();
    }
});
exports.default = main;

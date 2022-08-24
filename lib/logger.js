"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefix = ["\x1b[2m", "🚀 Endpoint builder:"];
const logger = {
    message: (msg) => {
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[37m", msg, "\x1b[0m");
    },
    success: (msg) => {
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[32m", "SUCCESS:", "\x1b[32m", msg, "\x1b[0m");
    },
    error: (msg) => {
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[31m", "ERROR:", "\x1b[31m", msg, "\x1b[0m");
    },
    warning: (msg) => {
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[33m", "WARNING:", "\x1b[33m", msg, "\x1b[0m");
    },
    fatal: (msg) => {
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[31m", "FATAL ERROR:", "\x1b[31m", msg, "\x1b[0m");
        console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[31m", "FATAL ERROR:", "\x1b[31m", "ABORTING", "\x1b[0m");
        process.exit();
    },
};
exports.default = logger;
//# sourceMappingURL=logger.js.map
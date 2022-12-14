const prefix = ["\x1b[2m", "🚀 Endpoint builder:"];

const logger = {
  /**
   * Logs a message
   * @param msg string
   */
  message: (msg: string) => {
    console.log(prefix[0], prefix[1], "\x1b[0m", "\x1b[37m", msg, "\x1b[0m");
  },
  /**
   * Logs a message in green
   * @param msg string
   */
  success: (msg: string) => {
    console.log(
      prefix[0],
      prefix[1],
      "\x1b[0m",
      "\x1b[32m",
      "Success:",
      "\x1b[32m",
      msg,
      "\x1b[0m"
    );
  },
  /**
   * Logs a message in red
   * @param msg string
   */
  error: (msg: string) => {
    console.log(
      prefix[0],
      prefix[1],
      "\x1b[0m",
      "\x1b[31m",
      "ERROR:",
      "\x1b[31m",
      msg,
      "\x1b[0m"
    );
  },
  /**
   * Logs a message in orange
   * @param msg string
   */
  warning: (msg: string) => {
    console.log(
      prefix[0],
      prefix[1],
      "\x1b[0m",
      "\x1b[33m",
      "Warning:",
      "\x1b[33m",
      msg,
      "\x1b[0m"
    );
  },
  /**
   * Logs a message in red then EXITS.
   * @param msg string
   */
  fatal: (msg: string) => {
    console.log(
      prefix[0],
      prefix[1],
      "\x1b[0m",
      "\x1b[31m",
      "FATAL ERROR:",
      "\x1b[31m",
      msg,
      "\x1b[0m"
    );
    console.log(
      prefix[0],
      prefix[1],
      "\x1b[0m",
      "\x1b[31m",
      "FATAL ERROR:",
      "\x1b[31m",
      "ABORTING",
      "\x1b[0m"
    );

    process.exit();
  },
};

export default logger;

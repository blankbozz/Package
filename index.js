require("colors");

const { TYPES } = require("./helper")

console.log("Hi".red);

const { success, warn, error } = TYPES

const logSuccess = (message) => {
    const msg = message[success]
    console.log(msg);
};

const logWarn = (message) => {
    const msg = message[warn]
    console.log(msg);
};

const logError = (message) => {
    const msg = message[error]
    console.log(msg);
};


const log = () => {
    return {
        success: (msg) => logSuccess(msg),
        warn: (msg) => logWarn(msg),
        error: (msg) => logError(msg),
    };
};

const logger = log()

logger.success("Yes !!");
logger.warn("It's Okay !!");
logger.error("No !!");

module.exports = log;

// const logger = log()

// logger.success("Yes") 
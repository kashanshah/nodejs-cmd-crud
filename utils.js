const chalk = require("chalk");
const log = (text) => {
    return (`${chalk.inverse(text)} `);
};

const logSuccess = (text) => {
    return (`✓ ${chalk.inverse.green(text)}`);
}

const logError = (text) => {
    return (`⭕ ${chalk.inverse.red(text)}`);
}

module.exports = {log, logError, logSuccess};

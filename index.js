const chalk = require("chalk");
const moment = require("moment");

console.log(
  "It is " +
    chalk.rgb(105, 210, 207)(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
);

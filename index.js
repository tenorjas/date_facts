const chalk = require("chalk");
const moment = require("moment");

console.log(
  "It is " +
    chalk.rgb(105, 210, 207)(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
);

console.log(
  "It is the " +
    chalk.rgb(186, 81, 182)(moment().format("DDDo")) +
    " day of the year."
);

let a = moment();
let b = moment().startOf("day");

console.log(
  "It is " +
    chalk.rgb(98, 182, 145)(a.diff(b, "seconds")) +
    " seconds into the day."
);

if (moment().isDST()) {
  console.log(
    "It " + chalk.rgb(37, 124, 27)("is") + " during Daylight Savings Time."
  );
} else {
  console.log(
    "It " + chalk.rgb(37, 124, 27)("is not") + " during Daylight Savings Time."
  );
}

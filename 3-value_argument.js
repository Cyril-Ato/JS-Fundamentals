const { argv } = require('node:process');

const firstArg = argv[2];

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log("No argument");
}

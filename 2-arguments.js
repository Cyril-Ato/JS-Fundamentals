const { argv } = require('node:process');

// User arguments start from argv[2]
let i = 2;
let count = 0;

// We'll check up to 6 arguments (argv[2] to argv[7]) as an example
while (argv[i]) {
  count++;
  i++;
}

if (count === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

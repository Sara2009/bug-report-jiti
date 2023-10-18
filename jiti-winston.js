const { transports } = require("winston");

console.log('winston', transports);

const jiti1 = require("jiti")(process.cwd(), { interopDefault: true, esmResolve: true });

const { transports: transports1 } = jiti1("winston");

console.log('jiti1', transports1); // output [] (empty array) not correct

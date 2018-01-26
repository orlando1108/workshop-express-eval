let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

// start server here
app.listen(process.argv[2] || 3000);
console.log(chalk.green('Hello web server'));

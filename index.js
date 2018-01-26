let chalk = require('chalk');
var fs = require('fs');

const app = require('./src/app');

// port
const port = 3000;

//get method
app.get('/bingo', function(req, res) {
  fs.readFile("src/numbers.txt", "utf8", function(err, data){
    if(err) throw err;
    res.send(data.split().join());
  });
})


// start server here
app.listen(process.argv[2] || 3000);
console.log(chalk.green('Hello web server'));

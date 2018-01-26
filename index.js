let chalk = require('chalk');
var fs = require('fs');

const app = require('./src/app');

// port
const port = 3000;

//get method
app.get('/bingo', function(req, res) {

  var params = req.query.mynumbers;
  var numbers;
  fs.readFile("src/numbers.txt", "utf8", function(err, data){
    if(err) throw err;
    numbers = data.split('\n').join().slice(0, -1);
    if(params){
      // j'ai pas fais gaffe à l'ordre des chiffres dans le parametre !
      switch(params === numbers){
          case true: res.send('Bingo');
          break
          case false: res.send('The bingo game is already started, sorry your numbers doesn\'t match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo');
          break
        }
    }else{
    res.send(`The bingo game is already started and known numbers are ${numbers}`);
  }
});
})
// start server here
app.listen(process.argv[2] || 3000);
console.log(chalk.green('Hello web server'));

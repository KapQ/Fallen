var express = require('express');
var bodyParser = require('body-parser')
var todoController = require('./controllers/todoController');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('./public/js'));

todoController(app);



app.use(bodyParser.json());

app.locals.pretty = true;

app.get('/', function(req, res){
  res.send('HERE!');
});

app.listen(3000, function(err){
  if (err) {
    console.error('Cannot listen at port 3000', err);
  }
  console.log('Todo app listening at port 3000');
});

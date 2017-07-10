var bodyParser = require('body-parser');


var data = [{item: 'fight now'}, {item: 'fight harder'}, {item: 'End Now'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});

  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);

  });

  app.delete('/todo', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

});
};

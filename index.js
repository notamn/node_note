var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(3000);

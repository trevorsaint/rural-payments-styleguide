// CONFIGURATIONS
// ==============================================
    
var express = require('express');
var exphbs  = require('express-handlebars');
var app     = express();
var routes  = require(__dirname + '/routes/');
var port    = (process.env.PORT || 3000);


// Application settings

app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');


// Middleware to serve static assets

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/iframe', express.static(__dirname + '/iframe'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use('/models', express.static(__dirname + '/models'));


// Body parser

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: false }));


// Sessions

var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


// Routes

routes.bind(app, '/routes/');


// Start app

app.listen(port);
console.log('Listening on port ' + port);
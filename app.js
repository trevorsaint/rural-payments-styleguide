// CONFIGURATIONS
// ==============================================
    
var express = require('express');
var exphbs  = require('express-handlebars');
var app     = express();
var routes  = require(__dirname + '/routes/');
var port    = (process.env.PORT || 3000);
    

// Cookie parser

var cookieParser = require('cookie-parser');
app.use(cookieParser());
    
    
// Session

var session = require('express-session');
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'Rural Payments Agency'
}));


// Parseurl
//var parseurl = require('parseurl');
    
    
// Body parser

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true }));


// Application settings

app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');


// Middleware to serve static assets

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));


// Routes

routes.bind(app, '/routes/');


// Start app

app.listen(port);
console.log('Listening on port ' + port);
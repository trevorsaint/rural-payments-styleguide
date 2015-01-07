// configurations
var express = require('express'),
    exphbs  = require('express-handlebars'),
    routes  = require(__dirname + '/routes.js'),
    app     = express();


// application settings
app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');


// static files path
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));


// routes
routes.bind(app, '/');


// start the app
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
// configurations
var express = require('express'),
    exphbs  = require('express-handlebars'),
    routes  = require(__dirname + '/routes.js'),
    app     = express(),
    port    = (process.env.PORT || 3000);


// application settings
app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');


// middleware to serve static assets
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));


// routes
routes.bind(app, '/');


// start the app
app.listen(port);
console.log('Listening on port ' + port);
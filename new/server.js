// Built in
var fs = require('fs');

// HTTP server and templating system
var express = require('express');
var hbs     = require( 'hbs' );

// Start server
var app = express();

hbs.registerPartials( __dirname + '/views/partials' );

// set the view engine to use handlebars
app.set( 'view engine', 'html' );
app.set('views', __dirname + '/views');

app.engine( 'html', require( 'hbs' ).__express );

// Load in public assets
app.use(express.static(__dirname + '/assets'));

// Render index view
app.get('/', function(req, res) {

    res.render('index');
});

app.listen(3000);

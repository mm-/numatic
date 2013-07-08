// Built in
var fs = require('fs');

// HTTP server and templating system
var express  = require( 'express' );
var hbs      = require( 'hbs' );
var articles = require( './routes/articles' );
var pages    = require( './routes/pages' );
var media    = require( './routes/media' );
var menus    = require( './routes/menus' );
var settings = require( './routes/settings' );

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

	var databaseUrl = "mydb"; // "username:password@example.com/mydb"
	var collections = ["testData"]
	var db = require("mongojs").connect(databaseUrl, collections);

	db.testData.find(function( data ) {
	});

	res.render( 'index', {data: ['who', 'are', 'you', 'anyway']});
});

app.get( '/articles', articles.index );
app.get( '/articles/new', articles.new_article );
app.get( '/pages', pages.index );
app.get( '/media', media.index );
app.get( '/menus', menus.index );
app.get( '/settings', settings.index );

app.listen(3000);

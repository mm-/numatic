exports.numaticDB = function() {

	var databaseUrl = "mydb"; // "username:password@example.com/mydb"
	var collections = ["testData"]
	var db = require("mongojs").connect(databaseUrl, collections);

	db.testData.find({name: "mongo"}, function(err, names) {
	  if( err || !names) console.log("No names found");
	  else names.forEach( function( name ) {
	    console.log( name );
	  } );
	});
	
}
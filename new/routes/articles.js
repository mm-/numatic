exports.index = function(req, res){
  res.render( 'articles', { title: "Articles" } );
};

exports.new_article = function(req, res){
  res.render( 'articles/new', { title: "New Article" } );
};
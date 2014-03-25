
exports.index = function(req, res) {
  res.render('index', { title: '西祠前端' });
};
exports.list = function(req, res){
  res.send("respond with a resource");
};
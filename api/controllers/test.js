module.exports.testGet = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'get' operation on server."});
};

module.exports.testPost = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'post' operation on server."});
};

var mongoose = require('mongoose');
var Example = mongoose.model('Example');

// Blank API call.
module.exports.testGet = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'get' operation on server."});
};

module.exports.testPost = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'post' operation on server."});
};

// API call to retrieve from database.
module.exports.testGetData = function(req, res){
  console.log("data id is: " + req.params.dataid);
  Example.findOne({ _id: req.params.dataid }, function(err, doc){
      console.log("error is: " + err);
      console.log("doc is: " + doc);

      if(err){
        console.log(err);
        res.status(400);
        res.json(err);
        return;
      }

      if(doc === null){
        res.status(400);
        res.json("Document not found.");
        return;
      }

      res.status(200);
      res.json(doc);
    });
};

// API call to add to database.
module.exports.testPostData = function(req, res){
  if(!req.body.name){
    res.status(300);
    res.json({message: "Data is missing 'name'."});
    return;
  }

  Example.create(
    req.body,
    function(err, doc) {
      if (err) {
        console.log(err);
        res.status(400);
        res.json(err);
      } else {
        console.log(doc);
        res.status(201);
        res.json(doc);
      }
  });
};

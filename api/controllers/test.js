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
  Example.findOne({ _id: req.params.dataid }, function(err, doc){
      if(err){
        console.log(err);
        res.status(400);
        res.json(err);
        return;
      }

      if(doc === null || doc === undefined){
        res.status(400);
        res.json("Document not found.");
        return;
      }

      res.status(200);
      res.json(doc);
    });
};

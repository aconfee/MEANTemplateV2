var chai = require('chai');
var assert = chai.assert;

var chaiHttp = require('chai-http'); // Chai plugin to test api
var server = require('../app'); // My app server
chai.use(chaiHttp);

describe('Base API', function(){
  describe('base API test', function(){
    it("should return good status code and message on /test GET", function(done){
      chai.request(server)
        .get('/api/test')
        .end(function(err, res){

          assert.equal(res.status, 200);
          assert.isNotNull(res.body.message, "Property 'message' does not exist on response.");
          assert.isDefined(res.body.message, "Property 'message' does not exist on response.");
          assert.equal("Successfully performed 'get' operation on server.", res.body.message);

          // Asynchronous functions simply return 'done' (and include as param above)
          done();
        });
    });

    it("should return good status code and message on /test POST", function(done){
      chai.request(server)
        .post('/api/test')
        .send({'name': 'Doesnt Matter'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isNotNull(res.body.message, "Property 'message' does not exist on response.");
            assert.isDefined(res.body.message, "Property 'message' does not exist on response.");
            assert.equal("Successfully performed 'post' operation on server.", res.body.message);

            done();
        });
    });

    it("should return a 404 not found error for unknown route '/unknown' GET", function(done){
      chai.request(server)
        .get('/api/unknown')
        .end(function(err, res){
          assert.equal(res.status, 404);

          done();
        });
    });
  });
});

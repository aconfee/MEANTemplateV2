process.env.NODE_ENV = 'test'; // Use correct MongoDB (and test env in general).

var chai = require('chai');
var assert = chai.assert;

var chaiHttp = require('chai-http'); // Chai plugin to test api
var server = require('../app'); // My app server
chai.use(chaiHttp);

var mongoose = require('mongoose');

/*
 * GET HEARTBEAT FROM API
 */
describe('Express Server', function(){
  describe('Express app API', function(){
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

/*
 * GET HEARTBEAT FROM MONGOOSE
 */
describe('MongoDB', function(){
  describe('Express API interacting with Mongoose', function(){

    var testDataId = "57b1702a03e6b25ae9f99e42";

    it("should return a persisting document when requested by id", function(done){
      this.timeout(10000); // Mongoose will still be initializing here.

      chai.request(server)
        .get('/api/testdata/' + testDataId)
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.name, 'Finally First Example');
          assert.isNotNull(res.body.data);
          assert.equal(res.body.data.length, 1);
          assert.equal(res.body.data[0].name, 'First subdocument');
          assert.equal(res.body.data[0].data, 9);

          done();
        });
    });
  });
});

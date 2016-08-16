var express = require('express');
var router = express.Router();

var ctrlTest = require('../controllers/test');
router.get('/test', ctrlTest.testGet);
router.post('/test', ctrlTest.testPost);

// Database
router.get('/testdata/:dataid', ctrlTest.testGetData);

module.exports = router;

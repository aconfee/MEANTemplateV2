var express = require('express');
var router = express.Router();

var ctrlTest = require('../controllers/test');
router.get('/test', ctrlTest.testGet);
router.post('/test', ctrlTest.testPost);

// new ctrl here

module.exports = router;

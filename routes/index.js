const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_req, res) {
  res.send('It works!');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res) {
  const date = new Date();
  const year = date.getFullYear().toString();
  console.log(year)
  res.json({ year:year });
});

module.exports = router;

var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  var num1 = Math.floor(Math.random() *15);

  var num2 = Math.random() *1;

  var num3 = Math.floor(Math.random() *15);

  var ata = Math.atan2(num1,num2);

  var atnh =Math.atanh(num2);

  var cbt = Math.cbrt(num3);

  res.render('compute', { title: 'chandugoud Khammampati',

  num1:num1,

  num2:num2,

  num3:num3,

  ata:ata,

  atnh:atnh,

  cbt:cbt

});

});



module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var promocoes = [
    { 
      fotoUrl: "http://www.tvsul.tv.br/wp-content/uploads/2011/05/Alta-no-preco-do-feijao.jpg", 
      empresa: "Zaffari" 
    },
    { 
      fotoUrl: "http://www.blogdaresenhageral.com.br/wp-content/uploads/feij%C3%A3o.jpg?x43390", 
      empresa: "Big" 
    },
    { 
      fotoUrl: "http://www.diariodesorocaba.com.br/files/materia/221223-3971481-Feij%C3%A3o.jpg", 
      empresa: "Andreassa" 
    },
  ];


  res.render('index', { promocoes: promocoes });
});

module.exports = router;

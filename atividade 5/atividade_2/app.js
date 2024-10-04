const http = require("http");

http.createServer(function(req, res){

  if(req.url === "/"){
     res.end('bem vindo')
  }
  else if(req.url === '/rota'){
    res.end('Meu nome e Dyeison tenho 22 anos e sou de laranjeiras do sul')
  }
  else if(req.url === '/sobre'){
    res.end('Meu contato: 4002-8922')
  }

}).listen(3000);
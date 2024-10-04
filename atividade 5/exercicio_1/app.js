const http = require("http");

http.createServer(function(req, res){

  if(req.url === "/"){
     res.end('bem vindo')
  }

}).listen(3000);
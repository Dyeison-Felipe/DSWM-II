const http = require("http");
const { NumeroAleatorio } = require("./utils.js");

http.createServer(function(req, res){

  if(req.url === "/"){
     res.end('bem vindo')
  }
  else if(req.url === '/numero'){
    const Random = NumeroAleatorio()
    res.end(Random.toString());
  }

}).listen(3000);
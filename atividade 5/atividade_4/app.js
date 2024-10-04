const http = require("http");

http.createServer(function(req, res){

  if(req.url === "/"){
     res.end('bem vindo')
  }
  else if(req.url.startsWith('/saudacao')){
    const name = req.url.split('/')[2]
    res.end(`Ola, ${name}`)
  }

}).listen(3000);
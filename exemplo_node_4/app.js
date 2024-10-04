const fs = require("fs");
const http = require("http");
const path = require("path")
const prompt = require("readline-sync");

var lista_de_usuarios = [];

lista_de_usuarios =  JSON.parse(fs.readFileSync("bd.json"));
// JSON.parse: pega um json e transforma em objeto
// fs.readFileSync("bd.json"): pega o aquivo db.json

var loop = true;
var loged = false;


function login(){
    console.log("LOGIN:");
    console.log("Insira seu usuario e senha:");

    var usuario = prompt.question("Usuario:");
    var senha = prompt.question("Senha:");


    for (let index = 0; index < lista_de_usuarios.length; index++) {

        if(usuario === lista_de_usuarios[index].login && senha === lista_de_usuarios[index].senha){
            loged = true;
            console.log("BEM VINDO")
            alert("bem vindo.")

        }
        else{
            console.clear();
            console.log("Login ou senha invalidos.")
            alert("Login ou senha invalidos.")
        }
        
    }
}

while (loop){
    if(loged === false){
        login();
    }
}

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
    else if(req.url.match("\.css$")){
        var csspath = path.join(__dirname, req.url); // mapeia o arquivo
        var fileStream = fs.createReadStream(csspath); // le o arquivo
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.png$")){
        var pngpath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(pngpath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>Pagina não encontrada</h1>");
    }


}).listen(8080);
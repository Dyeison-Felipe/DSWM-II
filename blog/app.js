const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3333;

//Consfigurar o EJS como mecanismo de visualização

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Configurar os arquivos da pasta public

app.use(express.static("public")); // static: deixa os arquivos da pasta estaticos

// Configurar o processamento de dados do forms

app.use(bodyParser.urlencoded({ extends: true }));

// Dados
const posts = [
  {
    id: 1,
    titulo: "1° postagem",
    conteudo: "Esse é o conteudo da 1° postagem",
  },
  {
    id: 2,
    titulo: "2° postagem",
    conteudo: "Esse é o conteudo da 2° postagem",
  },
];

//Rota principal

app.get("/", (req, res) => {
  res.render('index', { posts });
});

// Rota para exibir detalhes de um post

app.get('/post/:id', (req,res) => {
  const id = req.params.id; // pegando o id da url
  const post = posts.find((post) => post.id === +id); // procurando o id da url dentro da const de posts.
  console.log(post)
  res.render('post', { post }) // reenderiza o arquivo post que esta dentro da view passando a const post que vai conter o id e as propriedades daquele post.
})

// Rota para exibir o formulario de add

app.get('/add', (req,res) => {
  app.render('add');
})

//Rota para processar os dados do formulario de add

app.post('/add', (req,res) => {
  const { titulo, conteudo } = req.body;
  const id = posts.length + 1
  
  posts.push({ id, titulo, conteudo });
  res.redirect('/');
});

// configurar servidor

app.listen(port, () => {
  console.log(`server is running in http://localhost:3333`);
});



//importando
const express = require('express');

// cookies e session
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(session(
  {
    secret: 'minhaSenhaQueNinguemSabe', // chave para acessar os cookies
    resave: false, // evita gravar sessões sem alterações
    saveUninitialized: true // salvar na guia anônima
  }
));

// dados de exemplo (mokados - mocks)
const produtos = [
  {
    id: 1,
    nome: 'Alface',
    preco: 2
  },
  {
    id: 2,
    nome: 'Pashmina',
    preco: 70
  },
  {
    id: 3,
    nome: 'Pastel',
    preco: 6
  },
];

app.get('/produtos', (req,res) => {
  res.send(`

    <h1>Lista de produtos</h1>

    <ul>
      ${
        produtos.map((produto) => `
        
          <li>
            ${produto.nome} - ${produto.preco}
            <a href="/adicionar/${produto.id}">Adicionar ao carrinho</a>
          </li>

        `).join('')
      }
    </ul>

    <a href='/carrinho' >Ver carrinho</a>

  `);
})


//rota de adiconar produto
app.get('/adicionar/:id', (req,res) => {
  const id = +req.params.id;

  const produto = produtos.find((p) => p.id === id);

  if(produto) {
    if(!req.session.carrinho) {
      req.session.carrinho = []
    }
    req.session.carrinho.push(produto);
  }

  res.redirect('/produtos') // redirecionando para outra pagina 
})

// rota do carrinho
app.get('/carrinho', (req,res) => {
  const carrinho = req.session.carrinho || [];
  res.send(`

    <h1>Carrinho</h1>

    <ul>
      ${
        carrinho.map((produto) => `
        
          <li>
            ${produto.nome} - ${produto.preco}
          </li>

        `).join('')
      }
    </ul>

    <a href='/produtos' >Continuar comprando</a>

  `);
})


app.listen(3333, () =>{
  console.log("Server is ruinning");
})

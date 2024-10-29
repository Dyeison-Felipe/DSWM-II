//importando
import express from 'express';
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { users } from './db/user.js';

// cookies e session
export const app = express();
app.use(express.json());
const PORT = 8080;

app.use(cookieParser());

app.use(session(
  {
    secret: 'minhaSenhaQueNinguemSabe', // chave para acessar os cookies
    resave: false, // evita gravar sessões sem alterações
    saveUninitialized: true // salvar na guia anônima
  }
));

app.post('/login', (req, res) => {
  console.log("🚀 ~ app.post ~ req.body:", req.body)
  const foundUser = users.find((user) => user.email === req.body.email); // percorre os items do array e procura um email que corresponda ao enviado.
  console.log("🚀 ~ app.post ~ foundUser:", foundUser)

  const isPasswordValid = foundUser?.password === req.body.password // percorre os items do array e procura pela senha que corresponda a enviada

  if(!foundUser || !isPasswordValid) { //se o usuario digitar a senha ou o email não existir
    res.status(404).send(`email ou senha invalidos`)
  }


  req.session.isAuthenticated = true; // se a senha e o email estiverem certo, autentica o usuário

  const {id, name, email} = foundUser; // extraindo as propriedades menos a password do usuario

  res.cookie('user', JSON.stringify({id, name, email}), { maxAge: 900000, httpOnly: true });

  res.status(200).send("usuário autenticado com sucesso")
  
})

app.post('/logout', (req, res) => {
  req.session.isAuthenticated = false // seta o o usuario autenticado para falso e desloga

  res.clearCookie('user');

  res.status(200).send("usuário deslogado com sucesso")

})

function authMiddleware(req, res, next) {
  if (req.session.isAuthenticated) {
    next(); // usuário autenticado, continuar para a rota
  } else {
    res.redirect('/login.html'); // redireciona para a página de login
  }
}

app.get('/protected', authMiddleware, (req, res) => {
  res.sendFile('protected.html', { root: './public' }); // se o authMilddleware der certo, reenderiza esse arquivo
});

app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Server is running http://localhost:8080`)
})
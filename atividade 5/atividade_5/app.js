const express = require('express')
const path = require('path');

const app = express()

const PORT = 3333

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/api", (req,res) => {
  res.sendFile(path.join(__dirname, 'info.json'));
})

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`)
});
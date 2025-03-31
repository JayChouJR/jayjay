const express = require('express');
const path = require('path');
const root = require('../router/router.js'); // Importa as rotas

const app = express();

// Usa as rotas do arquivo separado
app.use('/', root);
app.use(express.static(path.join(__dirname, '../')));

// Servir arquivos estáticos (ex: home.html)
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/detalhes.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

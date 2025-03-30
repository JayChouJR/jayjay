const express = require('express');
const path = require('path');
const app = express();

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/home.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

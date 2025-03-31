const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/angular', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
});

// Rota para servir o HTML
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'home.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view' , 'login.html'));
});

router.get('/detalhes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view' , 'detalhes.html'));
});

module.exports = router;

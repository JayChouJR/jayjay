const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para servir o HTML
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'home.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view' , 'login.html'));
});

module.exports = router;

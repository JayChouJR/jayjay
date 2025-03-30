const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para servir o HTML
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'home.html'));
});

module.exports = router;

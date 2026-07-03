const express = require('express');
const router = express.Router();

// Redirige cualquier petición que empiece con /contacts al archivo contacts.js
router.use('/contacts', require('./contacts'));
router.get('/', (req, res) => {
    res.send('Contacts API funcionando en Render 🚀');
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Redirige cualquier petición que empiece con /contacts al archivo contacts.js
router.use('/contacts', require('./contacts'));

module.exports = router;
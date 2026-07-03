const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET para obtener todos los contactos (mapea a http://localhost:8080/contacts/)
router.get('/', contactsController.getAll);

// GET para obtener un solo contacto por ID (mapea a http://localhost:8080/contacts/id_de_mongo)
router.get('/:id', contactsController.getSingle);

module.exports = router;
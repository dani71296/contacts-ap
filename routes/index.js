const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Inyección dinámica de la URL según el entorno de ejecución
if (process.env.RENDER_EXTERNAL_URL) {
    swaggerDocument.host = process.env.RENDER_EXTERNAL_URL.replace(/^https?:\/\//, '');
    swaggerDocument.schemes = ['https'];
} else {
    swaggerDocument.host = 'localhost:8080';
    swaggerDocument.schemes = ['http'];
}

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const contactsRouter = require('./contacts');
router.use('/contacts', contactsRouter);

router.get('/', (req, res) => {
    res.send('Contacts API Working 🚀');
});

module.exports = router;
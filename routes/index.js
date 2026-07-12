const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

if (process.env.RENDER_EXTERNAL_URL) {
    swaggerDocument.host = process.env.RENDER_EXTERNAL_URL.replace(/^https?:\/\//, '');
    swaggerDocument.schemes = ['https'];
} else {
    swaggerDocument.host = 'localhost:8080';
    swaggerDocument.schemes = ['http'];
}


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

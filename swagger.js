const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API for W02 Project Part 2'
    },
    // Si estás en Render, usará tu URL pública; si no, usa localhost
    host: process.env.RENDER_EXTERNAL_URL
        ? process.env.RENDER_EXTERNAL_URL.replace(/^https?:\/\//, '')
        : 'localhost:8080',
    schemes: process.env.RENDER_EXTERNAL_URL ? ['https'] : ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // Apunta a tu enrutador principal

// Genera el json y arranca el server (opcional)
swaggerAutogen(outputFile, endpointsFiles, doc);
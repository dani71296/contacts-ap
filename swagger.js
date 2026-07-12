const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API for W02 Project Part 2'
    },
    host: '', // Lo dejamos vacío aquí para configurarlo en vivo
    schemes: [] // Lo dejamos vacío aquí también
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // Apunta a tu enrutador principal

// Genera el json y arranca el server (opcional)
swaggerAutogen(outputFile, endpointsFiles, doc);
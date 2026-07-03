const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8080;

// Middlewares para poder leer datos en formato JSON si fuera necesario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar el enrutador principal que creamos en routes/index.js
app.use('/', require('./routes'));

// Inicializar la base de datos antes de levantar el servidor Express
mongodb.initDb((err) => {
    if (err) {
        console.log('Error de conexión a MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Base de datos conectada y servidor corriendo en el puerto ${port}`);
        });
    }
});
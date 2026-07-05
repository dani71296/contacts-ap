const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log('Error de conexión a MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Base de datos conectada y servidor corriendo en el puerto ${port}`);
        });
    }
});
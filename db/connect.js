const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }

    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            console.log('MongoDB conectado correctamente');
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            console.error('Error completo de MongoDB:');
            console.error(err);
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw new Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};
const Sequelize = require('sequelize');
const config = require('./config/config');

const DB_USERNAME = config.DB_USERNAME;
const DB_NAME = config.DB_NAME;
const DB_PASSWORD = config.DB_PASSWORD;
const DB_HOST = config.DB_HOST;


const MovieModel = require('./models/movies.js');

const connection = new Sequelize(DB_USERNAME, DB_NAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
})

const movies = MovieModel(connection, Sequelize);

connection.sync({ force: false })
    .then((response) => {
        //console.log(response);
        console.log('La conexion a la base de datos es correcta');
    })
    .catch(function (error) {
        console.error(error);
    })

module.exports = {
    movies
}
const dotenv = require('dotenv').config();
// const { config } = require('dotenv');

module.exports = {
    HOST_URL: process.env.HOST_URL || 'http://localhost',
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    DB_NAME: process.env.DB_NAME || 'izLabXhID9',
    DB_USERNAME: process.env.DB_USERNAME || 'izLabXhID9',
    DB_PORT: process.env.DB_PORT || '6622',
    DB_HOST: process.env.DB_HOST || 'remotemysql.com',
    DB_PASSWORD: process.env.DB_PASSWORD || 'byoI9sR3xp'
}
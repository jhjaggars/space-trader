import 'dotenv/config';

var config = module.exports;

config.express = {
    port: process.env.PORT || 3000,
    ip: '127.0.0.1',
}

config.db = {
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASS || 'unset',
    database: process.env.POSTGRES_NAME || 'spacedb',
    charset: 'utf8',
}
#!/usr/bin/env node
const app = require('./index');
const config = require('./config');
export const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.name,
        charset: config.db.charset,
    },
});

app.listen(config.express.port, config.express.ip, (error) => {
    if (error) {
        console.error('unable to listen for connections', error);
        process.exit(10);
    }
    console.info(`express is listening on http://${config.express.ip}:${config.express.port}`);
})
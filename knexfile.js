// Update with your config settings.

const connection = {
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASS || 'unset',
  database: process.env.POSTGRES_NAME || 'spacedb',
  charset: 'utf8',
};

module.exports = {

  development: {
    client: 'pg',
    connection: connection,
  },

  staging: {
    client: 'pg',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

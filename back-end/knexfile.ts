// Update with your config settings.
import { config } from './src/config';

export default {

  development: {
    client: config.dbDialect || 'mysql',
    connection: {
      host: config.dbHost,
      port: config.dbPort,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.dbSchema || 'onbarber_development',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/data/migrations',
    },
    useNullAsDefault: true,
  },

  test: {
    client: config.dbDialect || 'sqlite',
    connection: {
      filename: config.dbSchema || 'tests/data/database.sqlite',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/data/migrations',
    },
    useNullAsDefault: true,
  },

  production: {
    client: config.dbDialect || 'mysql',
    connection: {
      host: config.dbHost,
      port: config.dbPort,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.dbSchema || 'onbarber_production',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/data/migrations',
    },
    useNullAsDefault: true,
  }
}

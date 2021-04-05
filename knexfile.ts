// Update with your config settings.

module.exports = {
  test: {
    client: "postgresql",
    connection: {
      host: "beluga",
      database: "metabase",
      user: "postgres",
      password: "postgres"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts"
    }
  },

  nodejs_metabase: {
    client: "postgresql",
    connection: {
      database: "metabase",
      user: "postgres",
      password: "postgres"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts"
    }
  }

};

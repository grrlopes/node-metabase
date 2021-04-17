// Update with your config settings.

const knexcfg = {
  test: {
    client: "postgresql",
    connection: {
      host: "db01",
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
      host: "db01",
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

export = knexcfg

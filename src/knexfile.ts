import path from "path";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "database", "database.db"),
    },
    pool: {
      afterCreate: (conn: any, cb: any) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      },
    },
    migrations: {
      directory: path.resolve(__dirname, "database", "knex", "migrations"),
      loadExtensions: [".js"], //production JS / dev: TS
    },
    useNullAsDefault: true,
  },
};

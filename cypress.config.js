const { defineConfig } = require("cypress");
const pg = require("pg");

require("dotenv").config();

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        connectDB({ dbconfig, query }) {
          const client = new pg.Pool(dbconfig);
          return client.query(query);
        },
      });
    },
    DB: {
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      host: "localhost",
      database: process.env.NAME_DB,
      port: "5432",
    },
  },
});

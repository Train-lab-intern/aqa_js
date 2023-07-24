const { defineConfig } = require("cypress");
const { Client } = require("pg");

require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front-test-a2ykv.ondigitalocean.app/",
    setupNodeEvents(on, config) {
      on("task", {
        async connectDB(query) {
          const client = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
          });
          await client.connect();
          await client.connect();
          const res = await client.query(query);
          await client.end();
          return res.rows;
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
})

const { defineConfig } = require("cypress");
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        async connectDB(sql) {
          const pool = new Pool({
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            host: process.env.DBHOST,
            database: process.env.DBNAME,
            ssl: { require: true },
            port: 5432,
          });
          const result = await pool.query(sql);
          await pool.end();
          return result;
        },
      });
    },
  },
});

const { defineConfig } = require('cypress');

const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	watchForFileChanges: false,
	env: {
		allureReuseAfterSpec: true,
	},
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				async connectDB(sql) {
					const pool = new Client({
						user: process.env.DBUSER,
						password: process.env.DBPASSWORD,
						host: process.env.DBHOST,
						database: process.env.DBNAME,
						ssl: { require: true },
						port: 5432,
					});
					await pool.connect();
					const result = await pool.query(sql);
					await pool.end();
					return result;
				},
			});
			require('cypress-mochawesome-reporter/plugin')(on);
			require('@cypress/grep/src/plugin')(config);
			const allureWriter = require('@shelex/cypress-allure-plugin/writer');
			allureWriter(on, config);
			return config;
		},
	},
});

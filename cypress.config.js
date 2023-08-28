const { defineConfig } = require('cypress');
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
	watchForFileChanges: false,
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				async connectDB(sql) {
					const client = new Client({
						user: process.env.DBUSER,
						password: process.env.DBPASSWORD,
						host: process.env.DBHOST,
						database: process.env.DBNAME,
						ssl: { require: true },
						port: 5432,
					});
					await client.connect();
					const result = await client.query(sql);
					await client.end();
					return result;
				},
			});
		},
	},
});

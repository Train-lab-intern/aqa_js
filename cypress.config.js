const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://back-test-4zwpv.ondigitalocean.app/front/pages',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

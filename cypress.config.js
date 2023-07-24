const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front-test-a2ykv.ondigitalocean.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

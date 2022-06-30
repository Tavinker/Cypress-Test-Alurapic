const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7ck3g3',
  baseURL: "https://alura-fotos.herokuapp.com", //setamos uma URL base para usar nos testes (refactoring)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",

      reporter: "junit",
      reporterOptions: {
        mochaFile: "results/results-[hash].xml"
      },
      "video": false
        
    },
  },
});





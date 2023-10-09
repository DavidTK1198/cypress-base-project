import { defineConfig } from 'cypress'
export default defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com/',
    supportFile: 'cypress/support/index.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
    testIsolation: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
      },
  },
})
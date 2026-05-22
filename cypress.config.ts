import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
    video: false,
    screenshotOnRunFailure: true
  },
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      VALID_USERNAME: process.env.VALID_USERNAME,
      VALID_PASSWORD: process.env.VALID_PASSWORD
    },
    setupNodeEvents(on, config) {
      // event listeners
    },
  },
});

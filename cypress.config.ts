import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
// import { allureCypress } from "allure-cypress/reporter";
import * as dotenv from 'dotenv';

dotenv.config();



export default defineConfig({

  e2e: {
    baseUrl: process.env.BASE_URL || "https://www.hudl.com/en_gb/",
    specPattern: "**/*.feature",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    experimentalOriginDependencies: true,
    async setupNodeEvents(on, config) {
      // implement node event listeners here    

      await addCucumberPreprocessorPlugin(on, config);

     
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
     
      allureWriter(on, config);
      config.env.allureResultsPath = "allure-results";
      
      return config;

    },
    env: {
      VALID_USER: process.env.VALID_USER,
      VALID_PASSWORD: process.env.VALID_PASSWORD,
      allure: true,
    }
  },
});





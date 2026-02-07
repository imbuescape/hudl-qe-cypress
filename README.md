# Cypress Hudl Automation (TypeScript + Cucumber + Yarn)

## Tech Stack
- Language: TypeScript
- Test Runner: Cypress
- BDD: @badeball/cypress-cucumber-preprocessor
- Reporting: Allure Report
- Package Manage: Yarn
- Linting: ESLint with Cypress & TS plugins


## Framework Architecture
The framework follows the Page Object Model (POM)  and Action-based-Abstraction

* `/cypress/e2e/features`: Gherkin feature files (Business Logic)
* `cypress/e2e/setp_definition`: Glue code mapping Gherkin to TS
* `/cypress/pages`: Page Objects containing UI locators and methods; separated out into individual Page folders comprising of two files; elements and their associated actions


## Prerequisite
- Ensure you have at least node 18+ installed
- Yarn (`npm install --global yarn`)
  
### Working with the framework
1. Clone repo
2. Install dependencies:
   ```
   yarn install

   ``` 

  ### Running Tests:
- Run in interactive mode: `yarn cy:open`
- Run in headless mode: `yarn cy:run`
- Generates static Allure HTML report: `yarn allure:report`
- Preview Allure Report immediately: `npx allure serve allure-results`
- Check for code quality: `yarn lint`
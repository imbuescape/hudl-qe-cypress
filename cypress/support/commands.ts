/// <reference types="cypress" />
import { loginPage } from "../pages/LoginPage/LoginPage";
import { landingPage } from "../pages/LandingPage/LandingPage"
import { LOGIN_ELEMENTS } from "../pages/LoginPage/elements"
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('submitMalformedEmail', (emailAddress) => {
    cy.log(`Logging in with invalid email address: ${emailAddress}`);

    loginPage.clickLoginButton();
    loginPage.clickHudlLogin();

    const selectors = {
        emailInput: LOGIN_ELEMENTS.emailInput,
        continueBtn: LOGIN_ELEMENTS.continueButtonSecondary, // Using standard button for the origin

    };

    cy.origin('https://identity.hudl.com/u/login/', { args: { emailAddress, selectors } },

        ({ emailAddress, selectors }) => {
            cy.get(selectors.emailInput).type(emailAddress);
            cy.get(selectors.continueBtn).click();

        });

});



Cypress.Commands.add('loginToHudlAlt', (emailAddress, password) => {
    cy.log(`Logging in user: ${emailAddress}`);

    loginPage.clickLoginButton();
    loginPage.clickHudlLogin();

    // Explicitly passing only strings to avoid path/serialization errors
    const selectors = {
        emailInput: LOGIN_ELEMENTS.emailInput,
        continueBtn: LOGIN_ELEMENTS.continueButtonSecondary, // Using standard button for the origin
        passInput: LOGIN_ELEMENTS.passwordInput,
        submitBtn: LOGIN_ELEMENTS.continueButton
    };

    cy.origin('https://identity.hudl.com/u/login/', { args: { emailAddress, password, selectors } },

        ({ emailAddress, password, selectors }) => {
            cy.get(selectors.emailInput).type(emailAddress);
            cy.get(selectors.continueBtn).click();
            cy.get(selectors.passInput).type(password, { log: false });
            cy.get(selectors.submitBtn).click();

        });

});




Cypress.Commands.add('verifyUserProfile', (expectedName, expectedEmailAddress) => {
    cy.log(`Verifying profile: ${expectedName} `);

    landingPage.getUserName()
        .should('be.visible')
        .and('contain.text', expectedName);

    landingPage.getUserEmail()
        .should('contain.text', expectedEmailAddress);

});

Cypress.Commands.add('verifyLoginErrorMessage', (expectedErrorMessage) => {
    // const originalMessage =  expectedErrorMessage;

    const args = {
        selector: LOGIN_ELEMENTS.EMAIL_PASSWORD_ERROR,
        expectedText: expectedErrorMessage,
    };

    cy.origin('https://identity.hudl.com/u/login/', { args }, ({ selector, expectedText }) => {

        cy.get(selector)
            .should('be.visible')
            .and('contain.text', expectedText);

    });
});



Cypress.Commands.add('verifyMalformedEmailErrorMessage', (expectedErrorMessage) => {

    const args = {
        selector: LOGIN_ELEMENTS.MALFORMED_EMAIL_ERROR,
        expectedText: expectedErrorMessage,
    };

    cy.origin('https://identity.hudl.com/u/login/', { args }, ({ selector, expectedText }) => {

        cy.get(selector)
            .should('be.visible')
            .and('contain.text', expectedText);

    });
});


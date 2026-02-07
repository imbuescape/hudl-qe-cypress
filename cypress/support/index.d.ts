/// <reference types="@shelex/cypress-allure-plugin" />
import './commands';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to perform a full Hudl login flow.
             * @example cy.loginToHudl('user@email.com', 'password123')
             */
            loginToHudl(email: string, password: string): Chainable<void>;

            loginToHudlAlt(email: string, password: string): Chainable<void>;

            submitMalformedEmail(malformedEmail: string): Chainable<void>;

            /**
             * Custom command to handle session persistence
             */
            loginViaSession(email: string, password: string): Chainable<void>;

            /**
             * Custom command to handle user email & user name verification
             */

            verifyUserProfile(expectedName: string, expectedEmail: string): Chainable<void>


            verifyLoginErrorMessage(expectedErrorMessage: string): Chainable<void>



            verifyMalformedEmailErrorMessage(expectedErrorMessage: string): Chainable<void>

        }
    }
}
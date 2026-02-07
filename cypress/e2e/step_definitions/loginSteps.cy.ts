import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage/LoginPage"
import { CredentialResolver } from "../../support/utils/CredentialResolver"

const LOGIN_ERROR_MSG = 'Incorrect username or password.';
const INVALID_EMAIL_MSG = 'Enter a valid email.';

 
    Given("I am on the Hudl login page", () => {
        loginPage.visit();
        
    });

  
    When("I login with valid credentials", () => {
        cy.loginToHudlAlt(Cypress.env('VALID_USER'), Cypress.env('VALID_PASSWORD'));
    

    });

    Then("I should be redirected to the dashboard", () => {
        cy.verifyUserProfile('John O', 'onijon@gmail.com');

    });

    When("I attempt to login with malformed email", () => {
        const userEmail = CredentialResolver.resolverUser('malformed_email_address');
        cy.submitMalformedEmail(userEmail);

    });


    Then("I should see invalid error message {string}", (errorMessage: string) => {
       cy. verifyMalformedEmailErrorMessage(errorMessage);

    });
     

  
    When("I attempt to login with {string} and {string}", (email: string, pass: string) => {
       
       
        const userEmail = CredentialResolver.resolverUser(email);
        const password = CredentialResolver.resolverPass(pass);


       cy.loginToHudlAlt(userEmail, password);

    });


    Then("I should see an error message {string}", (message: string) => {

        cy.verifyLoginErrorMessage(message)


    });

  
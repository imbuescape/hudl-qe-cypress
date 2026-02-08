
import { LOGIN_ELEMENTS } from './elements';


class LoginPage {

    visit() {
       return cy.visit('/');
    }


    clickLoginButton() {
        return cy.get(LOGIN_ELEMENTS.SELECT_LOGIN).click();
    }

    clickHudlLogin() {
        return cy.get(LOGIN_ELEMENTS.SELECT_HUDL).click();

    }
    clickContinueButton() {
        return cy.get(LOGIN_ELEMENTS.BTN_CONTINUE).click();
    }

    submitUserName(emailAddress: string) {
        return cy.get(LOGIN_ELEMENTS.EMAIL_INPUT).type(emailAddress);
    }

    submitPassword(password: string) {
        return cy.get(LOGIN_ELEMENTS.PASSWORD_INPUT).type(password, { log: false });
    }
    getPasswordError() {
        return cy.get(LOGIN_ELEMENTS.PASSWORD_ERROR)
    }
    getEmailPasswordError() {
        return cy.get(LOGIN_ELEMENTS.EMAIL_PASSWORD_ERROR);
    }
    getMalformedEmailError() {
        return cy.get(LOGIN_ELEMENTS.MALFORMED_EMAIL_ERROR);
    }
}

export const loginPage = new LoginPage();



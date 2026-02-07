import { LANDING_PAGE_ELEMENTS } from './elements';


class LandingPage {

            
        getUserName() {
            return cy.get(LANDING_PAGE_ELEMENTS.DISPLAY_NAME);
        }
        getUserEmail() {
            return cy.get(LANDING_PAGE_ELEMENTS.DISPLAY_EMAIL);
        }

       
    }

    export const landingPage = new LandingPage();


      
import { faker } from '@faker-js/faker';

export class CredentialResolver {

    static resolverUser(key: string): string {
        const userMap: Record<string, () => string> = {
            "random_email": () => faker.internet.email(),
            "malformed_email_address": () => faker.internet.email().replace('@', '@@'),
            "valid_user": () => Cypress.env('VALID_USER')
        };
        return userMap[key] ? userMap[key]() : (Cypress.env(key) || key); 
    }


    static resolverPass(key: string): string {
        const passMap: Record<string, () => string> = {
            "invalid_password": () => faker.internet.password({ length: 12 }),
            "valid_password": () => Cypress.env('VALID_PASSWORD')
        };
        return passMap[key] ? passMap[key]() : (Cypress.env(key) || key);
    }

}
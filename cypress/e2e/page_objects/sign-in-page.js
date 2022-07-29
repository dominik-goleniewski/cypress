import user from './../../fixtures/password.json'

export class SignInPage {


    static putEmail(email) {

        cy.get('#email').type(email);

    }


    static putPassword(password) {

        cy.get('#passwd').type(password);

    }


    static clickSignIn() {

        cy.get('.form_content').contains("Sign in").click();

    }


}
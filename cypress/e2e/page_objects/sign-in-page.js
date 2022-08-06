export class SignInPage {

    static checkIfSigningPageIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
    }

    static putEmail(email) {

        cy.get('#email').type(email);

    }

    static putPassword(password) {

        cy.get('#passwd').type(password);

    }

    static clickSignIn() {

        cy.get('.form_content').contains("Sign in").click();

    }

    static clickLogOut() {

        cy.get('.logout').contains("Sign out").click();

    }

}
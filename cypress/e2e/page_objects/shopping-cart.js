export class ShoppingCart {


    static checkPrice(id, price) {

        cy.get(`tbody > :nth-child(${id}) .cart_unit > .price .price`).invoke('text').should('eq', price);

    }


    static getFinalValue(price) {

        cy.get('#total_product').invoke('text').should('eq', price);

    }

}
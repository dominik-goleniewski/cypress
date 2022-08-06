export class MainPage {

    static openAutomationPracticePage(){

        cy.visit("http://automationpractice.com/index.php");

    }

    static clickCategory(name){

        cy.get('#block_top_menu').contains(name).click();

    }

    static clickSignIn(){
        cy.get('.header_user_info').contains("Sign in").click();
    }

    static clickShoppingCart(){

        cy.get('.shopping_cart').contains("Cart").click();

    }
    
    static clickAddProductAndGetPrice(id){

        let price = Cypress.$(`.product_list > :nth-child(${id}) .price`);
        cy.get(`[data-id-product=${id}]`).contains("Add to cart").click();
        return price[0].innerHTML.trim();

    }

    static clickContinueShopping(){

        cy.get('.continue').contains("Continue shopping").click();

    }

    static clickProceedToCheckout() {

        cy.get('.button-medium').contains("Proceed").click();

    }

    static addItemByName(item) {
        cy.get(".product_list").find(".product-container").contains(item).parents('.product-container').contains('Add to cart').click();
    }
}
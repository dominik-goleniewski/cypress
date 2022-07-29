/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page"
import { ShoppingCart } from "../page_objects/shopping-cart";
import { SignInPage } from "../page_objects/sign-in-page";
import user from './../../fixtures/password.json'

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('log in', () => {

        let data;
        before(() => {
            cy.fixture('password.json').then(function (loginData) {
                data = loginData;
            })
        })

        it('should login to account', () => {
            
            MainPage.clickSignIn();
            SignInPage.putEmail(data.email);
            SignInPage.putPassword(data.password);
            SignInPage.clickSignIn();

        })
    })

    describe('cart products', () => {
        it('should add 2 products to cart', () => {

            let price1, price2, value;
            MainPage.openAutomationPracticePage();
            price1 = MainPage.clickAddProduct(1);
            MainPage.clickContinueShopping();
            price2 = MainPage.clickAddProduct(2);
            MainPage.clickProceedToCheckout();

            ShoppingCart.checkPrice(1, price1);
            ShoppingCart.checkPrice(2, price2);

            value = Number(price1.substring(1)) + Number(price2.substring(1));
            value = "$" + value.toFixed(2);

            ShoppingCart.getFinalValue(value);
            
        })
    })
})
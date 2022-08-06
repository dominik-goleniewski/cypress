/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page"
import { ShoppingCart } from "../page_objects/shopping-cart";
import { SignInPage } from "../page_objects/sign-in-page";

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('log in', () => {

        let data;
        before(() => {
            cy.fixture('loginUsers.json').then(function (loginData) {
                data = loginData;
            })
        })

        it('should login users to their account', () => {

            let i = 0;
            data.forEach((dataUser) => {
                i++;
                MainPage.clickSignIn();
                SignInPage.checkIfSigningPageIsOpen();
                SignInPage.putEmail(dataUser.email);
                SignInPage.putPassword(dataUser.password);
                SignInPage.clickSignIn();
                if (i < Object.keys(data).length) // do not log out the last user
                    SignInPage.clickLogOut();
            })

        })
    })

    describe('cart products', () => {
        it('should add 2 products to cart', () => {

            let price1, price2, value;
            MainPage.openAutomationPracticePage();
            price1 = MainPage.clickAddProductAndGetPrice(1);
            MainPage.clickContinueShopping();
            price2 = MainPage.clickAddProductAndGetPrice(2);
            MainPage.clickProceedToCheckout();

            ShoppingCart.checkPrice(1, price1);
            ShoppingCart.checkPrice(2, price2);

            value = Number(price1.substring(1)) + Number(price2.substring(1));
            value = "$" + value.toFixed(2);

            ShoppingCart.getAndCheckFinalValue(value);

        })
    })

    describe('add items from json', () => {
        
        let data;
            before(() => {
                cy.fixture('Products.json').then(function (productsData) {
                    data = productsData;
                })
            })
        
        it('should add 2 products from json to cart', () => {
            
            data.forEach((dataProduct) => {
                MainPage.openAutomationPracticePage();
                MainPage.addItemByName(dataProduct.name);
                MainPage.clickContinueShopping();
            })

        })
    })
})
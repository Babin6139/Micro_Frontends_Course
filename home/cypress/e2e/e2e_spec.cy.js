describe("My first E2E test",()=>{
    it("should add an item to the cart ",()=>{
        cy.visit('http://localhost:3000/');
cy.get('#login').click();
cy.get('#loginbtn').click();
cy.get('#showcart').click();
cy.get('#clearcart').click();
cy.get('#shoppingcart').click();
cy.get('#addtocart_1').click();
cy.get('#shoppingcart').dblclick();
cy.get('#cart').click();

        
cy.get("#grandtotal").should("contain","$5.99");

    })
});
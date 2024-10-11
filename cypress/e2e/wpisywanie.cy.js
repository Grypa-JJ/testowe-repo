/// <reference types="cypress" />

describe("wpisywanie tekstu", () => {
    it("wpisywanie tekstu", () => {
        cy.visit("/");
        cy.get("#search_query_top").type("chujchuj");
        cy.wait(3000);
        cy.get("#search_query_top").clear();
        cy.get("#search_query_top").type("przykładowa treść {enter}");

    })
})
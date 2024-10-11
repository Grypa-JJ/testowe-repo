/// <reference types="cypress" />

describe("kliknięcie w element na stronie", () => {
    it("kliknięcie w zakładkę contact us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click()
    })
})
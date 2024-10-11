/// <reference types="cypress" />

describe("Mój pierwszy test automatyczny", () => {
    it("otworzenie strony google.com", () => {
        cy.visit("https://google.com")
    })
})
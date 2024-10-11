/// <reference types="cypress" />

describe("Test związany z zaznaczeniem checkboxa", () => {
    it("kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category");
    })
    it("Zaznaczenie checkboxa w zakłądce Women", () => {
        cy.get (`#layered_category_4`).check();
        cy.get (`#ul_layered_id_attribute_group_1 input`).check()
    })
})
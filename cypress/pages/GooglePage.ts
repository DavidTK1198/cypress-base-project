
export class GooglePage {
    constructor() {

    }
    open() {
        cy.visit('/');
    }
    checkTitle() {
        cy.title().should('eq', 'Google');
    }
    typeAndSearch(text: string) {
        cy.get('textarea[name=q]').type(`${text}{enter}`)
    }
}
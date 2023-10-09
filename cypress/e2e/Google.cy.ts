/// <reference types="@cypress/grep" />
import { GooglePage } from '@pages/GooglePage';
const googlePage = new GooglePage()
describe('Search something on Google ', { tags: '@sanity' },() => {
    beforeEach(() => {
        cy.log('Navigate to Google');
        googlePage.open()
        googlePage.checkTitle()
    })

    it('Search ChatGPT on Google', () => {
        googlePage.typeAndSearch('ChatGPT');
    });
})

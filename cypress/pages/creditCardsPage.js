const { clickClosePopupButton } = require("./securityPage")

class creditCardsPage{
    elements = {
        creditCardHeader: () => cy.get("#listing_intro_hero_banner_1 h1"),
        applyNowButton: () => cy.get("#listing_intro_button_1"),
        creditCardTitle: () => cy.get(".product-general h2"),
        creditCardImageWithPosition: (position) => cy.get(".product-general img").eq(position),
        creditCardTitleWithPosition: (position) => cy.get(".product-general h2").eq(position),
        compareCreditCardsButtonWithPosition: (position) => cy.get(".productModule a[href='/credit-cards/compare/']").eq(position),
        findOutMoreCreditCardButtonWithPosition: (position) => cy.get(".productModule span:contains('Find out more')"),
        applyNowCreditCardButtonWithPosition: (position) => cy.get(".productModule span:contains('Apply now')"),
        closePopupButton: () => cy.get(".modal-dialog .close-button")
    }

    verifyCreditCardHeader(){
        this.elements.creditCardHeader().invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq("Credit cards")
        })
    }

    verifyApplyNowButtonExist(){
        this.elements.applyNowButton().should('exist')
    }

    verifyCountOfCreditCardTypes(expected_count){
        this.elements.creditCardTitle().should('have.length', expected_count)
    }

    verifyCreditCardImageText(position, expected_text){
        this.elements.creditCardImageWithPosition(position).invoke('attr','alt').should('equal',expected_text)
    }

    verifyCreditCardHeaderTitle(position, expected_text){
        this.elements.creditCardTitleWithPosition(position).invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq(expected_text)
        })
    }

    verifyCreditCardCompareButton(position){
        this.elements.compareCreditCardsButtonWithPosition(position).should('exist')
    }

    verifyFindOutMoreAboutCreditCardButton(position){
        this.elements.findOutMoreCreditCardButtonWithPosition(position).should('exist')
    }

    verifyApplyNowCreditCardButtonExist(position){
        this.elements.applyNowCreditCardButtonWithPosition(position).should('exist')
    }

    clickCompareCreditCardsButton(position){
        this.elements.compareCreditCardsButtonWithPosition(0).click()
    }

    verifyClosePopupButtonExist(){
        this.elements.closePopupButton().should('exist')
    }
}

module.exports = new creditCardsPage();
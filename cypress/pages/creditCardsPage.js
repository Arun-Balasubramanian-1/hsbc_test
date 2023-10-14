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
        closePopupButton: () => cy.get(".modal-dialog .close-button"),
        compareCardsHeader: () => cy.get(".modal-dialog h2"),
        compareCreditCardsTitle: () => cy.get(".modal-dialog .label-for-checkbox"),
        compareCreditCardsCheckboxWithPosition: (position) => cy.get(".modal-dialog .modal-checkbox").eq(position),
        compareCreditCardsPopupButton: () => cy.get(".modal-button span"),
        selectedCreditCardImage: () => cy.get(".product-images-container img"),
        removeCardLink: () => cy.get(".product-select-container .clear-icon"),
        addCardLink: (position) => cy.get(".product-select-container .add-icon").eq(position)
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
        this.elements.compareCreditCardsButtonWithPosition(position).click()
    }

    verifyClosePopupButtonExist(){
        this.elements.closePopupButton().should('exist')
    }

    verifyCompareCardsHeader(expected_text){
        this.elements.compareCardsHeader().invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq(expected_text)
        })
    }

    verifyCountOfCompareCreditCards(expected_count){
        this.elements.compareCreditCardsTitle().should('have.length', expected_count)
    }

    checkCompareCreditCardCheckbox(position){
        this.elements.compareCreditCardsCheckboxWithPosition(position).click()
    }

    clickCompareCreditCardsPopupButton(){
        this.elements.compareCreditCardsPopupButton().click()
    }

    verifyCountOfSelectedCreditCards(expected_count){
        this.elements.selectedCreditCardImage().should('have.length', expected_count)
    }

    verifyCountOfRemoveCardLink(expected_count){
        this.elements.removeCardLink().should('have.length', expected_count)
    }

    clickAddCardLink(position){
        this.elements.addCardLink(position).click()
    }

    clickRemoveCardLink(position){
        this.elements.removeCardLink().eq(position).click()
    }
    
    clickClosePopupButton(){
        this.elements.closePopupButton().click()
    }

    verifyPopupIsCLosed(){
        this.elements.closePopupButton().should('not.be.visible')
    }
}

module.exports = new creditCardsPage();
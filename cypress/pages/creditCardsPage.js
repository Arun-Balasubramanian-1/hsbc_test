class creditCardsPage{
    elements = {
        creditCardHeader: () => cy.get("#listing_intro_hero_banner_1 h1")
    }

    verifyCreditCardHeader(){
        this.elements.creditCardHeader().invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq("Credit cards")
        })
    }
}

module.exports = new creditCardsPage();
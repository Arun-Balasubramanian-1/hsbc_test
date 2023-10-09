class privacyStatementPage {

    elements = {
        headers: () => cy.get(".intro-section").find("h1")
    }

    verifyPrivacyStatementHeader(){
        this.elements.headers().invoke('text').then((headerText) => {
            expect(headerText).to.include("Privacy Statement")
        })
    }

}

module.exports = new privacyStatementPage();
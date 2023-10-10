class securityPage {
    elements = {
        loginHeader: () => cy.get("#form-page h2 span"),
       
    }

    verifyLoginPageHeaderText(expected_text){
        this.elements.loginHeader().invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq(expected_text)
        })
    }
    
}

module.exports = new securityPage();
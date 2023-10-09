class branchesPage {
    elements = {
        headers: () => cy.get("#content_intro_hero_banner_2").find("h1"),
        branchOrAtmLocatorButton: () => cy.get("#content_main_button_1")

    }

    verifyBranchPageHeaderText(expected_text){
        this.elements.headers().invoke('text').then((headerText) => {
            expect(headerText).to.include(expected_text)
        })
    }

    clickBranchOrAtmLocatorButton(){
        this.elements.branchOrAtmLocatorButton().click()
    }
}

module.exports = new branchesPage();
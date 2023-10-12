class securityPage {
    elements = {
        loginHeader: () => cy.get("#form-page h2 span"),
        continueButton: () => cy.get("#username_submit_btn"),
        usernameField: () => cy.get("#username"),
        rememberMeCheckbox: () => cy.get("#rememberMe"),
        helpIcon: () => cy.get(".help-icon"),
        helpContentHeader: () => cy.get("#help_content_1 span"),
        closePopupButton: () => cy.get(".slide-content .icon-delete")
       
    }

    verifyLoginPageHeaderText(expected_text){
        this.elements.loginHeader().invoke('text').then((headerText) => {
            expect(headerText.trim()).to.eq(expected_text)
        })
    }

    verifyContinueButtonIsPresent(){
        this.elements.continueButton().should('exist');
    }

    verifyContinueButtonIsDisabled(){
        this.elements.continueButton().should('be.disabled');
    }

    verifyContinueButtonIsEnabled(){
        this.elements.continueButton().should('not.be.disabled');
    }

    typeEmailInLoginPage(email){
        this.elements.usernameField().type(email)
    }

    verifyRememberMeCheckboxIsNotChecked(){
        this.elements.rememberMeCheckbox().should('not.be.checked')
    }

    verifyHelpIconExists(){
        this.elements.helpIcon().should('exist');
    }

    clickHelpIcon(){
        this.elements.helpIcon().click()
    }
    
    verifyHelpContentHeaderText(expected_text){
        this.elements.helpContentHeader().invoke('text').then((headerText) => {
            expect(headerText).to.eq(expected_text)
        })
    }

    verifyClosePopupButtonExist(){
        this.elements.closePopupButton().should('exist');
    }

    clickClosePopupButton(){
        this.elements.closePopupButton().click()
    }
    
}

module.exports = new securityPage();
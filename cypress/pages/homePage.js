class homePage {
    elements = {
        findNearestBranchOrAtm: () => cy.get("nav[aria-label='Main Footer Navigation']").find("a:contains('Find your nearest HSBC branch or ATM')"),
        instagramFooterOption: () => cy.get(".social-row .social-icon-instagram"),
        facebookFooterOption: () => cy.get(".social-row .social-icon-facebook"),
        twitterFooterOption: () => cy.get(".social-row .social-icon-twitter"),
        youtubeFooterOption: () => cy.get(".social-row .social-icon-youtube"),
        hsbcIcon: () => cy.get(".header-logo img[alt='HSBC India Bank']"),
        privacyLink: () => cy.get(".footer-bottom a:contains('Privacy Statement')"),
        navigationTitle: (index) => cy.get(".header-main-navigation-title").eq(index),
        logOnButton: () => cy.get(".header-top-meta .login-button"),
        bankingNavigation: () => cy.get(".header-main .header-main-navigation-item").eq(0),
        creditCardLink: () => cy.get(".links-group h2:contains('Credit Cards')").eq(0)
    }

    clickfindNearestBranchOrAtm(){
        this.elements.findNearestBranchOrAtm().click();
    }

    verifyInstagramFooterOptionIsPresent(){
        this.elements.instagramFooterOption().should('exist');
    }

    verifyFacebookFooterOptionIsPresent(){
        this.elements.facebookFooterOption().should('exist');
    }

    verifyTwitterFooterOptionIsPresent(){
        this.elements.twitterFooterOption().should('exist');
    }

    verifyYoutubeFooterOptionIsPresent(){
        this.elements.youtubeFooterOption().should('exist');
    }

    clickHSBCIcon(){
        this.elements.hsbcIcon().click();
    }

    clickPrivacyLink(){
        this.elements.privacyLink().click();
    }

    verifyHSBCIconIsPresent(){
        this.elements.hsbcIcon().should('exist');
    }

    verifyNavigationTitleText(index, expected_text){
        this.elements.navigationTitle(index).invoke('text').then((titleText) => {
            expect(titleText).to.eq(expected_text)
        })
    }

    clickLoginOnButton(){
        this.elements.logOnButton().click();
    }

    hoverBankingNavigation(){
        this.elements.bankingNavigation().trigger('mouseover')
    }

    clickCreditCardsLink(){
        this.elements.creditCardLink().click({force: true})
    }
    
}

module.exports = new homePage();
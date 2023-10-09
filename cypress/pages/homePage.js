class homePage {
    elements = {
        findNearestBranchOrAtm: () => cy.get("nav[aria-label='Main Footer Navigation']").find("a:contains('Find your nearest HSBC branch or ATM')"),
        instagramFooterOption: () => cy.get(".social-row .social-icon-instagram"),
        facebookFooterOption: () => cy.get(".social-row .social-icon-facebook"),
        twitterFooterOption: () => cy.get(".social-row .social-icon-twitter"),
        youtubeFooterOption: () => cy.get(".social-row .social-icon-youtube"),
        hsbcIcon: () => cy.get(".header-logo img[alt='HSBC India Bank']")
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
    
}

module.exports = new homePage();
class homePage {
    elements = {
        findNearestBranchOrAtm: () => cy.get("nav[aria-label='Main Footer Navigation']").find("a:contains('Find your nearest HSBC branch or ATM')")
    }

    clickfindNearestBranchOrAtm(){
        this.elements.findNearestBranchOrAtm().click();
    }
}

module.exports = new homePage();
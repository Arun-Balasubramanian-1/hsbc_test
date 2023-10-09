import homePage from "../pages/homePage"
import branchesPage from "../pages/branchesPage"
import branchFinderPage from "../pages/branchFinderPage"


describe('HSBC ATM Search spec', () => {

    let hsbcData;

    before(function(){
        cy.fixture('hsbc').then(function (data){
            hsbcData = data
        })
    })

    beforeEach(function() {
        // step 1
        cy.visit(hsbcData.Url);
    })

    it('ATM Search Scenario', () => {
        // step 2
        cy.scrollTo('bottom');
        // step 3
        homePage.clickfindNearestBranchOrAtm();
        // step 4
        cy.url().should('include', '/ways-to-bank/branches/')
        // step 5
        branchesPage.verifyBranchPageHeaderText("Branches & ATM");
        // step 6
        branchesPage.clickBranchOrAtmLocatorButton();
        // step 7
        branchFinderPage.searchLocation("India")
        // step 8
        branchFinderPage.selectLocation("India")
        // step 9
        branchFinderPage.verifyHeaderInLocationSearchResult("Rajbhavan Road")
        // step 10
        branchFinderPage.clickShowMoreResultsButton()
        // step 11
        branchFinderPage.getSearchResultListText(1, "Amar Avinash Corporate City")
        // step 12
        homePage.verifyInstagramFooterOptionIsPresent()
        // step 13
        homePage.verifyFacebookFooterOptionIsPresent()
        // step 14
        homePage.verifyTwitterFooterOptionIsPresent()
        // step 15
        homePage.verifyYoutubeFooterOptionIsPresent()
        // step 16
        homePage.clickHSBCIcon()
        // step 17
        // step 18
        // step 19
        // step 20
    })

})
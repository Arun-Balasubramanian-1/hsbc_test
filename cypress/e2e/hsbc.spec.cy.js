import homePage from "../pages/homePage"
import branchesPage from "../pages/branchesPage"
import branchFinderPage from "../pages/branchFinderPage"
import privacyStatementPage from "../pages/privacyStatementPage"
import securityPage from "../pages/securityPage"


describe('HSBC spec', () => {

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

    it('HSBC Login Scenario', () => {
        // step 2
        homePage.verifyHSBCIconIsPresent()
        // step 3
        homePage.verifyNavigationTitleText(0, "Banking")
        homePage.verifyNavigationTitleText(1, "Borrowing")
        homePage.verifyNavigationTitleText(2, "Investing")
        homePage.verifyNavigationTitleText(3, "NRI")
        homePage.verifyNavigationTitleText(4, "Offers")
        homePage.verifyNavigationTitleText(5, "Online Banking")
        // step 4
        homePage.clickLoginOnButton()
        // step 5
        securityPage.verifyLoginPageHeaderText("Log On")
        // step 6
        // step 7
        // step 8
        // step 9
        // step 10
        // step 11
        // step 12
        // step 13
        // step 14
        // step 15

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
        cy.url().should('eql', 'https://www.hsbc.co.in/')
        // step 18
        cy.scrollTo('bottom');
        // step 19
        homePage.clickPrivacyLink();
        // step 20
        privacyStatementPage.verifyPrivacyStatementHeader();
    })
    

})
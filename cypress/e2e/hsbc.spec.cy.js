import homePage from "../pages/homePage"
import branchesPage from "../pages/branchesPage"
import branchFinderPage from "../pages/branchFinderPage"
import privacyStatementPage from "../pages/privacyStatementPage"
import securityPage from "../pages/securityPage"
import creditCardsPage from "../pages/creditCardsPage"

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
        securityPage.verifyContinueButtonIsPresent()
        // step 7
        securityPage.verifyContinueButtonIsDisabled()
        // step 8
        securityPage.typeEmailInLoginPage("arun@cypress.com")
        // step 9
        securityPage.verifyContinueButtonIsEnabled()
        // step 10
        securityPage.verifyRememberMeCheckboxIsNotChecked()
        // step 11
        securityPage.verifyHelpIconExists()
        // step 12
        securityPage.clickHelpIcon()
        // step 13
        securityPage.verifyHelpContentHeaderText("Username")
        // step 14
        securityPage.verifyClosePopupButtonExist()
        // step 15
        securityPage.clickClosePopupButton()

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
    
    it('Credit Card Flow', () => {
        // step 2
        homePage.hoverBankingNavigation()
        // step 3
        homePage.clickCreditCardsLink()
        // step 4
        creditCardsPage.verifyCreditCardHeader()
        // step 5
        creditCardsPage.verifyApplyNowButtonExist()
        // step 6
        creditCardsPage.verifyCountOfCreditCardTypes(3)
        // step 7
        creditCardsPage.verifyCreditCardImageText(0, "HSBC Visa Cashback Credit Card")
        // step 8
        creditCardsPage.verifyCreditCardHeaderTitle(0, "HSBC Cashback Credit Card")
        // step 9
        creditCardsPage.verifyCreditCardCompareButton(0)
        // step 10
        creditCardsPage.verifyFindOutMoreAboutCreditCardButton(0)
        // step 11
        creditCardsPage.verifyApplyNowCreditCardButtonExist(0)
        // step 12
        creditCardsPage.clickCompareCreditCardsButton(0)
        // step 13
        creditCardsPage.verifyClosePopupButtonExist()
        // step 14
        creditCardsPage.verifyCompareCardsHeader("Select cards to compare")
        // step 15
        creditCardsPage.verifyCountOfCompareCreditCards(3)
        // step 16
        creditCardsPage.checkCompareCreditCardCheckbox(0)
        creditCardsPage.checkCompareCreditCardCheckbox(1)
        // step 17
        creditCardsPage.clickCompareCreditCardsPopupButton()
        // step 18
        creditCardsPage.verifyCountOfSelectedCreditCards(2)
        // step 19
        creditCardsPage.verifyCountOfRemoveCardLink(2)
        // step 20
        creditCardsPage.clickAddCardLink(0)
        // step 21
        creditCardsPage.checkCompareCreditCardCheckbox(2)
        creditCardsPage.clickCompareCreditCardsPopupButton()
        // step 22
        creditCardsPage.verifyCountOfSelectedCreditCards(3)
        // step 23
        creditCardsPage.verifyCountOfRemoveCardLink(3)
        // step 24
        creditCardsPage.clickRemoveCardLink(1)
        // step 25
        creditCardsPage.verifyCountOfSelectedCreditCards(2)
        // step 26
        creditCardsPage.clickAddCardLink(0)
        // step 27
        creditCardsPage.clickClosePopupButton()
        // step 28
        creditCardsPage.verifyPopupIsCLosed()
    })

})
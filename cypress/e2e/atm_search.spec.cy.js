import homePage from "../pages/homePage"


describe('HSBC ATM Search spec', () => {

    let hsbcData;

    before(function(){
        cy.fixture('hsbc').then(function (data){
            hsbcData = data
        })
    })

    beforeEach(function() {
        cy.visit(hsbcData.Url);
    })

    it('passes', () => {
        cy.scrollTo('bottom');
        homePage.clickfindNearestBranchOrAtm();
    })

})
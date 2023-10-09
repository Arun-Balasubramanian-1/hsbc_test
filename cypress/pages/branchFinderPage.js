class branchFinderPage {
    elements = {
        location: () => cy.get("#searchInput"),
        locationOption: (location) => cy.get("#autocomplete-results").find("li:contains('"+location+"')").eq(0),
        loationSearchResultHeader: () => cy.get(".branchLocator h2"),
        showMoreResultsButton: () => cy.get("button[aria-label='Show more results']"),
        locationResultList: (index) => cy.get(".branchLocator ul li").eq(index).find("h2")
    }

    searchLocation(location){
        cy.wait(3000)
        this.elements.location().type(location)
    }

    selectLocation(location){
        cy.wait(2000)
        this.elements.locationOption("India").click({force: true})
    }

    verifyHeaderInLocationSearchResult(expected_header){
        cy.wait(3000)
        this.elements.loationSearchResultHeader().invoke('text').then((headerText) => {
            expect(headerText).to.include(expected_header)
        })
    }

    clickShowMoreResultsButton(){
        this.elements.showMoreResultsButton().click()
    }

    getSearchResultListText(index, expected_title) {
        this.elements.locationResultList(index).invoke('text').then((actualTitle) => {
            expect(actualTitle).to.include(expected_title)
        })
    }
}

module.exports = new branchFinderPage();
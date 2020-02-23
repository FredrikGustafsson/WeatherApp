describe('Start page', function() {
    it('Search for city', function() {

        const cityToSearchFor = 'Sundsvall';

        cy.visit('http://localhost:3000/');

        cy.get('button').contains('Get Weather');

        cy.get('input').type(cityToSearchFor);

        cy.get('button').should('have.length', 1)

        cy.get('button').contains('Get Weather').click();

        cy.get('div.zipcode-container').contains('Weather data for:');

        cy.get('div.zipcode-container').contains(cityToSearchFor);

        cy.get('div.flex-item').should('have.length', 5)

    })
})
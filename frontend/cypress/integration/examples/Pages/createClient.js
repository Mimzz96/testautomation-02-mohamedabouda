class createClient {

    createclient(){ 

    cy.get('.blocks > :nth-child(2) > .btn').click()

    cy.get('h2 > div').should("contain", "Clients")

    cy.get('h2 > .btn').click();

    cy.get('h2 > div').should("contain", "New Client")

    cy.get(':nth-child(1) > input').type("tester")
    cy.get(':nth-child(2) > input').type("test@test.se")
    cy.get(':nth-child(3) > input').type("0707070707")

    cy.get('.blue').click();

    cy.get('h2 > div').should("contain", "Clients")

    cy.contains("tester")

    }
}

export default createClient
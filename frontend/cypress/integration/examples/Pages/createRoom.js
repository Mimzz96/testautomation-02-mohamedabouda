class createRoom {

    createroom(){
        cy.get('.blocks > :nth-child(1) > .btn').click()

    cy.get('h2 > div').should("contain", "Rooms")

    cy.get('h2 > .btn').click();

    cy.get('h2 > div').should("contain", "New Room")

    cy.get(':nth-child(2) > input').type("15")
    cy.get(':nth-child(3) > input').type("15")
    cy.get(':nth-child(5) > input').type("8000")

    cy.get('.blue').click();

    cy.get('h2 > div').should("contain", "Rooms")

    cy.contains("8000")

    }
    

    
}

export default createRoom
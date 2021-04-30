class createReservation {

    createreservation (){
    
        cy.get('.blocks > :nth-child(4) > .btn').click()
    
        cy.get('h2 > div').should("contain", "Reservations")
    
        cy.get('h2 > .btn').click();
    
        cy.get('h2 > div').should("contain", "New Reservation")
    
        cy.get(':nth-child(1) > input').type("2020-01-20")
        cy.get(':nth-child(2) > input').type("2020-01-30")
    
        cy.get('.blue').click();
    
        cy.get('h2 > div').should("contain", "Reservations")
    
        cy.contains("2020-01-20")
    
    }
    
    
    }
    
    export default createReservation
class createBill {


    createbill(){
        cy.get('.blocks > :nth-child(3) > .btn').click()

        cy.get('h2 > div').should("contain", "Bills")
    
        cy.get('h2 > .btn').click();
    
        cy.get('h2 > div').should("contain", "New Bill")
    
        cy.get(':nth-child(1) > input').type("5000")
    
        cy.get('.blue').click();
    
        cy.get('h2 > div').should("contain", "Bills")
    
        cy.contains("5000")

    }


}

export default createBill
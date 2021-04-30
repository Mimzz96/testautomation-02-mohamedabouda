import loginLogoutPage from './examples/Pages/loginLogout'
import createRoom from './examples/Pages/createRoom'
import createClient from './examples/Pages/createClient'
import createBill from './examples/Pages/createBill'
import createReservation from './examples/Pages/createReservation'



describe('Test Suite', function () {
    const a = new loginLogoutPage()


    it('TestCase1', function () {


        a.login()
        cy.percySnapshot('First screenshot of the loginlogout test')
        a.logout()


    })

    it('TestCase2', function () {

        const b = new createRoom()

        a.login()
        b.createroom()
        cy.percySnapshot('Screenshot after creating a new room')
        a.logout()

    })

    it('TestCase3', function () {

        const c = new createClient()

        a.login()
        c.createclient()
        cy.percySnapshot('Screenshot after creating a new client')

        a.logout()


    })

    it('TestCase4', function () {

        const d = new createBill()

        a.login()
        d.createbill()
        cy.percySnapshot('Screenshot after creating a new bill')

        a.logout()


    })

    it('TestCase5', function () {

        const e = new createReservation()

        a.login()
        e.createreservation()
        cy.percySnapshot('Screenshot after creating a new reservation')

        a.logout()
    })


})
const testDatalogin = require("../../../fixtures/login.json")

import loginPage from "../../../support/page_object/loginPage"
describe('login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    // ล็อกอินสำเร็จ
    it('tc-01, login successfully', () => {
        // get username
        cy.get('#username').type('tomsmith')
        //get password
        cy.get('#password').type('SuperSecretPassword!')
        // click login
        cy.get('.radius').click()
    })

    // ล็อกอินและล็อกเอาท์สำเร็จ
    it('tc-02, login and logout successfully', () => {
        // get username
        cy.get('#username').type('tomsmith')
        //get password
        cy.get('#password').type('SuperSecretPassword!')
        // click login button
        cy.get('.radius').click()
        // click logout button
        cy.get('.button').click()
    })

    // ชื่อผู้ใช้ไม่ถูกต้อง
    it.only('tc-03, wrong username', () => {
        //cy.login('student', 'incorrectPassword')
        // get username
        cy.get('#username').type('wrongusername')
        //get password
        cy.get('#password').type('SuperSecretPassword!')
        // click Login button
        cy.get('.radius').click()
        // show error
        cy.get('#flash-messages').contains('Your username is invalid!')
    })

    // รหัสผ่านไม่ถูกต้อง
    it.only('tc-04, wrong password', () => {
        //cy.login('student', 'incorrectPassword')
        // get username
        cy.get('#username').type('tomsmith')
        //get password
        cy.get('#password').type('wrongpassword')
        // click Login button
        cy.get('.radius').click()
        // show error
        cy.get('#flash-messages').contains('Your password is invalid!')
    })
})
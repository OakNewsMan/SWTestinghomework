const testDatalogin = require("../../fixtures/login.json")

import loginPage from "../../support/page_object/loginPage"
describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        })
    it.only('tc-01', () => {
        //cy.login('student', 'Password123')
        cy.login(testDatalogin.username.positive ,testDatalogin.password.positive)
        //cy.get('#username').type('incorrectUser')
        //cy.get('#password').type('Password123')
        loginPage.verifyLoginSucessText()
        //cy.get('.post-title').should('have.text','Logged In Successfully')
        //cy.url().should("include", "/logged-in-successfully/");
    })
    it('tc-02', () => {
        //cy.login('incorrectUser', 'Password123')
        cy.login(testDatalogin.username.negative ,testDatalogin.password.positive)
        loginPage.verifyLoginErrorUsername()
        //cy.get('#username').type('incorrectUser')
        //cy.get('#password').type('Password123')
        //cy.get('#submit').click()
        cy.get('#error').contains('Your username is invalid!')
    })
    it('tc-03', () => {
        //cy.login('student', 'incorrectPassword')
        cy.login(testDatalogin.username.positive ,testDatalogin.password.negative)
        loginPage.verifyLoginErrorPassword()
        //cy.get('#username').type('incorrectUser')
        //cy.get('#password').type('Password123')
        //cy.get('#submit').click()
        cy.get('#error').contains('Your password is invalid!')
    })
})
const testDatalogin = require("../../../fixtures/login.json")

import loginPage from "../../../support/page_object/loginPage"
describe('login', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action')
    })
    
    // ลงทะเบียน
    it('tc-01, Register Now!', () => {
        // click Register Button
        cy.get('#Catalog > a').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // ล็อกอินสำเร็จ
    it('tc-02, login succesfully', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // ข้อมูลว่าง
    it('tc-03, null username and password', () => {
        // clear password
        cy.get('[name="password"]').clear()
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // เลือกดูปลา
    it('tc-04, click on fish', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click fish button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // เลือกดูสุนัข
    it('tc-05, click on dogs', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click dog button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // เลือกดูสัตว์เลื้อยคลาน
    it('tc-06, click on reptiles', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click reptiles button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // เลือกดูแมว
    it('tc-07, click on cats', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click cat button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // เลือกดูนก
    it('tc-08, click on birds', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click bird button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // กลับสู่หน้าหลัก
    it('tc-09, return to main menu', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click bird button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
        // click on return to main menu
        cy.get('#BackLink > a').click()
        // wait 1 minutes
        cy.wait(1000)
    })

    // ออกจากระบบ
    it('tc-10, logout succesfully', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click logout button
        cy.get('[href="/actions/Account.action?signoff="]').click()
    })

    // ซื้อสัตว์เลี้ยงหนึ่งตัว
    it.only('tc-11, buy one pet', () => {
        // get username
        cy.get('[name="username"]').type('j2ee')
        // get password
        cy.get('[name="password"]').clear().type('j2ee')
        // click login button
        cy.get('[name="signon"]').click()
        // wait 1 minutes
        cy.wait(1000)
        // click bird button on sidebar
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        // wait 1 minutes
        cy.wait(1000)
        // choose finch
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        // check on detail
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        // add to cart
        cy.get('.Button').click()
        // proceed to purchase
        cy.get('[href="/actions/Order.action?newOrderForm="').click()
        // continue
        cy.get('[name="newOrder"]').click()
        // confirm
        cy.get('.Button').click()
    })
})
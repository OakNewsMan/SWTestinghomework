describe('form-validation', () => {

    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/form-validation')
    })

    function getRandomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // เพิ่ม 1 เพราะ getMonth() เริ่มจาก 0
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // ตรวจสอบการส่งฟอร์มเมื่อกรอรข้อมูลครบถ้วน (เลือก card)
    it('tc-01 - Submit when all fields are valid (Card)', () => {
        
        // ตรวจสอบว่า input field สำหรับชื่อผู้ใช้ปรากฏอยู่ใน DOM
        cy.get('#validationCustom01').should('be.visible');

        // ใช้ clear() เพื่อลบข้อความเก่าออกจาก input field แล้วกรอกชื่อ
        cy.get('#validationCustom01').clear().type('student'); 

        // กรอกเบอร์โทร
        cy.get(':nth-child(2) > #validationCustom05').type('085-8951863')

        // กรอกวันที่
        cy.get(':nth-child(3) > #validationCustom05').invoke('val', '2024-10-01').trigger('change');

        // กรอกประเภทการจ่าย
        cy.get('#validationCustom04').select('card');

        // คลิกส่งฟอร์ม
        cy.get('.col-12 > .btn').click();
    
    })

    // ตรวจสอบการแจ้งเตือนเมื่อกรอกข้อมูลไม่ครบถ้วน
    it('tc-02 - Submit with incomplete fields', () => {
        // ตรวจสอบว่า input field สำหรับชื่อผู้ใช้ปรากฏอยู่ใน DOM
        cy.get('#validationCustom01').should('be.visible');

        // ใช้ clear() เพื่อลบข้อความเก่าออกจาก input field แล้วกรอกชื่อ
        cy.get('#validationCustom01').clear().type('student'); 

        // กรอกเบอร์โทร
        /*cy.get(':nth-child(2) > #validationCustom05').type('085-8951863')

        // กรอกวันที่
        cy.get(':nth-child(3) > #validationCustom05').invoke('val', '2024-10-01').trigger('change');

        // กรอกประเภทการจ่าย
        cy.get('#validationCustom04').invoke('val', 'card').trigger('change');
        */
        // คลิกส่งฟอร์ม
        cy.get('.col-12 > .btn').click();

    })

    // ตรวจสอบการกรอกเบอร์มือถือไม่ถูกต้อง
    it('tc-03 - Invalid Phone Number Format', () => {
        // ตรวจสอบว่า input field สำหรับชื่อผู้ใช้ปรากฏอยู่ใน DOM
        cy.get('#validationCustom01').should('be.visible');

        // ใช้ clear() เพื่อลบข้อความเก่าออกจาก input field แล้วกรอกชื่อ
        cy.get('#validationCustom01').clear().type('student'); 

        // กรอกเบอร์โทรศัพท์ไม่ถูกต้อง (น้อยกว่า 10 หลัก)
        cy.get(':nth-child(2) > #validationCustom05').type('085-85')
        
        // กรอกวันที่
        cy.get(':nth-child(3) > #validationCustom05').invoke('val', '2024-10-01').trigger('change');

        // กรอกประเภทการจ่าย
        cy.get('#validationCustom04').invoke('val', 'card').trigger('change');
        
        // คลิกส่งฟอร์ม
        cy.get('.col-12 > .btn').click();

    })

    // ตรวจสอบการส่งฟอร์มเมื่อกรอรข้อมูลครบถ้วน (เลือก cash on delivery)
    it('tc-04 - Submit when all fields are valid (Cash on delivery)', () => {
        // ตรวจสอบว่า input field สำหรับชื่อผู้ใช้ปรากฏอยู่ใน DOM
        cy.get('#validationCustom01').should('be.visible');

        // ใช้ clear() เพื่อลบข้อความเก่าออกจาก input field แล้วกรอกชื่อ
        cy.get('#validationCustom01').clear().type('student'); 

        // กรอกเบอร์โทร
        cy.get(':nth-child(2) > #validationCustom05').type('085-8951863')

        // กรอกวันที่
        cy.get(':nth-child(3) > #validationCustom05').invoke('val', '2024-10-01').trigger('change');

        // กรอกประเภทการจ่าย
        cy.get('#validationCustom04').select('cash on delivery');
        
        // คลิกส่งฟอร์ม
        cy.get('.col-12 > .btn').click();

    })

    //ตรวจสอบการสุ่มวัน/เดือน/ปี
    it.only('tc-05 - Randomized Date', () => {
        
        const randomDate = getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31));

        // ตรวจสอบว่า input field สำหรับชื่อผู้ใช้ปรากฏอยู่ใน DOM
        cy.get('#validationCustom01').should('be.visible');

        // ใช้ clear() เพื่อลบข้อความเก่าออกจาก input field แล้วกรอกชื่อ
        cy.get('#validationCustom01').clear().type('student'); 

        // กรอกเบอร์โทร
        cy.get(':nth-child(2) > #validationCustom05').type('085-8951863')

        // กรอกวันที่
        cy.get(':nth-child(3) > #validationCustom05').invoke('val', randomDate).trigger('change');

        // กรอกประเภทการจ่าย
        cy.get('#validationCustom04').select('card');

        // คลิกส่งฟอร์ม
        cy.get('.col-12 > .btn').click();
    
    })
})
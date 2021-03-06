describe('To test the functionality forgot password',()=>{
    it('Forgot password',()=>{
        cy.visit('https://events-staging.unibuddy.co/your-university/my-first-event/')
        cy.get('._2U8E > :nth-child(2)').should('contain','welcome')
        cy.get(':nth-child(2) > ._1KQ0').should('have.text','New to Unibuddy?')
        cy.get(':nth-child(1) > ._3wAa').click()
        cy.get('._1DiB').should('have.text','Login')
        cy.get('#resetPassword').should('have.text','Forgot your password?')
        cy.get('#resetPassword').click()
        cy.get('#email').should('exist')
        cy.get('._1DiB').should('have.text','Reset Password')
        cy.get('#continue').should('have.text','Send Link')
        cy.get('#email').type("testuser5@gmail.com")
        cy.get('#continue').click()
        cy.url().should('include','resetrequested')
        cy.get('._1DiB').should('have.text','Reset Requested')
        cy.get('._1Ph5 > a').should('have.text','Login here')
    }) 
})
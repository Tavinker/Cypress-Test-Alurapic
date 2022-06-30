describe('Usabilidade da tela inicial', () => {
 
    beforeEach(() => {
        cy.visit('/'); //no lugar da URL, colocamos "/" pois está pegando a baseURL contida no arquivo "cypress.config.js"
    })

    it('verifica mensagem de validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');

        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })   
})
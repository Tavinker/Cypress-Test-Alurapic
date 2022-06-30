describe('Login  de usuarios alura pic', () => {
 
    beforeEach(() => {
        //este primeiro exemplo é caso utilizemos o "url" no arquivo cypress.env.json
        cy.visit(Cypress.env('url'));

        //stub
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login',{
            statusCode: 400
        }).as('stubPost')
    })

    //nesse exemplo, temos o login e senha vindo de variavel de ambiente "env" sendo o caso de teste refatorado com boas práticas
    it.only('fazer login de usuario valido', () => { 
        cy.login(Cypress.env('userName'), Cypress.env('password')) //login e senha com variavel de ambiente, ou seja, infos ocultas
            cy.wait('@stubPost') //sempre que o login for feito, será interceptado pelo stub

        cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('tentar fazer login de usuario invalido', () => { 
        cy.login('gabriel', '1234')
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')})
    })


});
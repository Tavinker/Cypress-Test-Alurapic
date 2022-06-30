describe('Login  de usuarios alura pic', () => {
 
    beforeEach(() => {
        //este primeiro exemplo é caso utilizemos o "url" no arquivo cypress.env.json
        cy.visit(Cypress.env('url'));
    })

     /* ----> Caso de teste de login e senha anteriores (escrevendo cada linha de código de cada elemento)
    
    it.only('fazer login de usuario valido', () => { 
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123'); 
        cy.get('button[type="submit"]').click();
    })

    it.only('tentar fazer login de usuario invalido', () => { 
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('1234'); 
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')})
    })*/




    //it.only = só irá executar esse teste com o "only"
    
    //nesse exemplo, as infos de login e senha estão hardcode
    /*it.only('fazer login de usuario valido', () => { 
        cy.login('flavio', '123') //infos em hardcore --- não é boa prática, exibe toda a credencial do usuario
        cy.contains('a', '(Logout)').should('be.visible');
    })*/

    //nesse exemplo, temos o login e senha vindo de variavel de ambiente "env" sendo o caso de teste refatorado com boas práticas
    it.only('fazer login de usuario valido', () => { 
        cy.login(Cypress.env('userName'), Cypress.env('password')) //login e senha com variavel de ambiente, ou seja, infos ocultas
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('tentar fazer login de usuario invalido', () => { 
        cy.login('gabriel', '1234')
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')})
    })


});
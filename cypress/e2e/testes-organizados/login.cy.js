describe('Login  de usuarios alura pic', () => {
 
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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
    it.only('fazer login de usuario valido', () => { 
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('tentar fazer login de usuario invalido', () => { 
        cy.login('gabriel', '1234')
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')})
    })


});
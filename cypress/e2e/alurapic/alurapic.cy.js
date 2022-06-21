describe('Login e registro de usuarios alura pic', () => {
 
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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

    it('verifica mensagem de email invalido', () => { 
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('gabriel');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de nome completo com menos de 2 caracteres', () => { 
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('a');
        cy.get('input[formcontrolname="email"]').click(); //click utilizado para tirar o foco do campo e exibir a mensagem de tratamento de erro
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de nome de usuário com menos de 2 caracteres', () => { 
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('a');
        cy.get('input[formcontrolname="email"]').click(); //click utilizado para tirar o foco do campo e exibir a mensagem de tratamento de erro
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => { 
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('input[formcontrolname="email"]').click(); //click utilizado para tirar o foco do campo e exibir a mensagem de tratamento de erro
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
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


    
    
})
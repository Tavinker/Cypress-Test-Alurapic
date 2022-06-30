describe('Cadastro de usuarios alura pic', () => {
 
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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

     //declaração de variável que referencia o arquivo json de usuarios
     const usuarios = require('../../fixtures/usuarios.json')

     //json será percorrido cada item dentro do it, exibindo todos os usuários presentes no json
     usuarios.forEach(usuario => {
         it.only('registra novo usuario ' + usuario.userName, () => { //concatenção com variável referenciado do json serve para identificar no caso de teste cada usuário que estará sendo executado. Ex: registra novo usuario luke, registra novo usuario anakin, etc.
             cy.contains('a', 'Register now').click();
             cy.contains('button', 'Register').click();
             cy.get('input[formcontrolname="email"]').type(usuario.email);
             cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
             cy.get('input[formcontrolname="userName"]').type(usuario.userName);
             cy.get('input[formcontrolname="password"]').type(usuario.pasword);
             cy.contains('button', 'Register').click();
         })
     });


});
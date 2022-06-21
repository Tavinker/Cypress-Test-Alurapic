describe('Registro de usuarios em massa no alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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
    
    
 

})
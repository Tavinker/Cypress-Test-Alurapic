//comando pré-personalizado para digitar "login", "senha" e clicar no botão "submit" --- Alurapic
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha); 
    cy.get('button[type="submit"]').click();
})
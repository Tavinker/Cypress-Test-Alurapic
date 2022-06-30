//comando pré-personalizado para digitar "login", "senha" e clicar no botão "submit" --- Alurapic

/*esse exemplo faz com que os dados sensíveis do usuário apareçam na UI do Cypress durante a execução 
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome); //assim será exibida a senha no teste com UI do Cypress
    cy.get('input[formcontrolname="password"]').type(senha); //assim será exibida a senha no teste com UI do Cypress
    cy.get('button[type="submit"]').click();
}) */

//esse comando é o recomendado por boa prática, escondendo so dados sensíveis com o "{log: false}"
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome, {log: false}); //usuario não é exibido na execução do teste
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); //senha não é exibida na execução do teste
    cy.get('button[type="submit"]').click();
})

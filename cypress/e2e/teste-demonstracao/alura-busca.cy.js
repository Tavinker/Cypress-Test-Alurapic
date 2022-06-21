describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })
        
    it('buscar curso de java', () => {
        //arange - preparo de ambiente
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        
        //act - ação
        cy.get('.header-barraBusca-form-submit').click();

        //assert - confirmação de passo executado
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
    })

})
describe('Buscar fotos e dados', ()=> {

    it.only('buscar fotos do flavio', ()=> { //testando api (Método GET)
        
        const tempoEsperado = Math.random() * 3000;
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            expect(res.duration).to.be.lte(tempoEsperado)             
        })
    })
})
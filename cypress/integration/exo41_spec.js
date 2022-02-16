describe('Mon joli Test', () => {
    it('Connection', () => {
        cy.visit('http://localhost:3000/Exercice-41.html')
    })
    it('Ajoutez un premier élément dans la fifo', () => {
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')

        cy.get('input[name="push"]').click()
        cy.get('#lifo').find('li').should('have.length', 1)
        cy.get('#lifo').contains('Je')
        
    })
    it('Ajoutez un deuxième élément dans la fifo ', ()=> {
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()

        cy.get('#lifo').find('li').should('have.length', 2)
        cy.get('#lifo').contains('Je')
        cy.get('#lifo').contains('Suis')
    })

    it('POP ', ()=> {
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()

        cy.get('#lifo').find('li').should('have.length', 2)
        cy.get('#lifo').contains('Je')
        cy.get('#lifo').contains('Suis')

        cy.get('input[name="pop"]').click()
        cy.get('#lifo').find('li').should('have.length', 1)
        cy.get('#lifo').contains('Je')
        cy.get('#lifo').contains('Suis').should('not.exist')
    })

    it('PEEK ', ()=> {
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Incroyable')
        cy.get('input[name="push"]').click()

        cy.get('#lifo').find('li').should('have.length', 3)
        cy.get('#lifo').contains('Je')
        cy.get('#lifo').contains('Suis')
        cy.get('#lifo').contains('Incroyable')

        cy.get('input[name="peek"]').click()
        cy.get('#lifo').find('li').should('have.length', 3)
        cy.get('#peek-area').contains('Incroyable')

        cy.get('input[name="pop"]').click()
        cy.get('input[name="peek"]').click()
        cy.get('#lifo').find('li').should('have.length', 2)
        cy.get('#peek-area').contains('Suis')
       
    })

    it('1 seul POP', ()=>{
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="pop"]').click()
        cy.get('#lifo').find('li').should('have.length', 0)
    })
})
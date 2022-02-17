describe('Mon joli Test', () => {
    it('Connection', () => {
        //test juste la connection à la page
        cy.visit('http://localhost:3000/Exercice-41.html')
    })
    it('Ajoutez un premier élément dans la fifo', () => {
        //test l'ajout d'un élément dans la fifo
        cy.visit('http://localhost:3000/Exercice-41.html') //se connecte à la page

        cy.get('input[name="newItem"]').type('Je') //tape Je dans la zone de texte

        cy.get('input[name="push"]').click()//permet de cliquer sur push
        cy.get('#lifo').find('li').should('have.length', 1) //vérifie qu'on a un seul élément dans lifo
        cy.get('#lifo').contains('Je')//vérifie que cet élément est bien Je
        
    })
    it('Ajoutez un deuxième élément dans la fifo ', ()=> {
        //test l'ajout de plusieurs éléments dans la fifo
        cy.visit('http://localhost:3000/Exercice-41.html')

        //on ajoute Je et Suis dans la lifo
        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()

        cy.get('#lifo').find('li').should('have.length', 2) //vérifie qu'on a bien nos 2 éléments dans lifo
        cy.get('#lifo').contains('Je') //et vérifie que ce sont bien nos deux textes écrits
        cy.get('#lifo').contains('Suis')
    })

    it('POP ', ()=> {
        //vérifie le bon fonctionnement du POP
        cy.visit('http://localhost:3000/Exercice-41.html')

        //on ajoute Je et Suis dans la lifo
        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()


        cy.get('input[name="pop"]').click() //on click sur le POP
        cy.get('#lifo').find('li').should('have.length', 1) //vérifie qu'on a bien plus qu'un seul élément
        cy.get('#lifo').contains('Je') // et que c'est bien Je
        cy.get('#lifo').contains('Suis').should('not.exist') //et que Suis a bien été POP
    })

    it('PEEK ', ()=> {
        //vérifie le bon fonctionnement du PEEK
        cy.visit('http://localhost:3000/Exercice-41.html')

        //on ajoute Je Suis Incroyable dans la lifo
        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Suis')
        cy.get('input[name="push"]').click()
        cy.get('input[name="newItem"]').type('Incroyable')
        cy.get('input[name="push"]').click()

        //on vérifie que les éléments sont bien dans la lifo
        cy.get('#lifo').find('li').should('have.length', 3)
        cy.get('#lifo').contains('Je')
        cy.get('#lifo').contains('Suis')
        cy.get('#lifo').contains('Incroyable')

        cy.get('input[name="peek"]').click() //on click sur peek
        cy.get('#lifo').find('li').should('have.length', 3) //on doit toujours avoir 3 éléments dans lifo
        cy.get('#peek-area').contains('Incroyable')//on vérifie que c'est bien Incroyable qui est dans la peek-area

        //vérifie que on peut peek d'autres éléments 
        cy.get('input[name="pop"]').click() //on POP Incroyable de la lifo
        cy.get('input[name="peek"]').click() //et on PEEK Suis
        cy.get('#lifo').find('li').should('have.length', 2) //on doit avoir 2 éléments dans la lifo
        cy.get('#peek-area').contains('Suis') //c'est maintenant Suis qui doit être dans le peek-area
       
    })

    it('1 seul POP', ()=>{
        //on fait un seul PUSH/POP et la lifo doit avoir une longeur de 0 à la fin
        cy.visit('http://localhost:3000/Exercice-41.html')

        cy.get('input[name="newItem"]').type('Je')
        cy.get('input[name="push"]').click()
        cy.get('input[name="pop"]').click()
        cy.get('#lifo').find('li').should('have.length', 0)
    })
})
describe('todomvc.com page test', () => {

  it('add todo', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    cy.get('[data-testid="text-input"]').type('Buy milk').type('{enter}')

    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').should('contain', 'Buy milk')
  })

  it('mark todo as completed', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    cy.get('[data-testid="text-input"]').type('Buy bread').type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()

    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').should('contain', 'Buy bread')
  })

  it('mark todo as incompleted', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    cy.get('[data-testid="text-input"]').type('Buy strawberries').type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()

    cy.get('.todo-list li').should('have.length', 1)
  })

  // it('edit todo', () => {
  //   cy.visit('https://todomvc.com/examples/react/dist/')
  //   cy.get('[data-testid="text-input"]').type('Buy strawberries').type('{enter}')
  //   cy.get('[data-testid="todo-item-label"]').dblclick()
  //   cy.get('[data-testid="input-container"]').type('Buy beer').type('{enter}')
  // })

  // it('delete todo', () => {
  //   cy.visit('https://todomvc.com/examples/react/dist/')
  //   cy.get('[data-testid="text-input"]').type('Buy oranges').type('{enter}')
  //   cy.get('[data-testid="todo-item-label"]').trigger('mouseover')
  // })

})
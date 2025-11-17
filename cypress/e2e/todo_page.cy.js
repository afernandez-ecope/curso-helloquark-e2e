// describe is used to group the tests
describe('todomvc.com page test', () => {

  // beforeEach is used to visit the page before each test
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  // it is used to test the add todo functionality
  it('should add a todo', () => {
    cy.get('[data-testid="text-input"]').type('Buy milk').type('{enter}')
    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').should('contain', 'Buy milk')
  })

  // it is used to test the mark todo as completed functionality
  it('should mark a todo as completed', () => {
    cy.get('[data-testid="text-input"]').type('Buy bread').type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').should('contain', 'Buy bread')
  })

  // it is used to test the mark todo as incompleted functionality
  it('should mark a todo as incompleted', () => {
    cy.get('[data-testid="text-input"]').type('Buy strawberries').type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('.todo-list li').should('have.length', 1)
  })

  // it is used to test the edit todo functionality
  it('should edit a todo', () => {
    cy.get('[data-testid="text-input"]').type('Buy strawberries').type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('be.visible').dblclick()
    cy.focused().clear().type('Buy beer{enter}')
    cy.get('.todo-list li').should('contain', 'Buy beer')
  })

  // it is used to test the delete todo functionality
  it('should delete a todo', () => {
    cy.get('[data-testid="text-input"]').type('Buy oranges').type('{enter}')
    cy.contains('li', 'Buy oranges').trigger('mouseover')
    cy.contains('li', 'Buy oranges').find('button.destroy').click({ force: true })
    cy.contains('Buy oranges').should('not.exist')
  })

})
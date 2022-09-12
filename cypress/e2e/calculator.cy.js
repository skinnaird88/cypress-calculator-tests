describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should update display with the pressing of number buttons', () => {
    cy.get('#number8').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '83')
  })

  it('should have working operator buttons', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '50');

  })

  it('should be able to show positive numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })


  it('should be able to show negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should be able to show numbers with a decimal place', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('should be able to show very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '90000000000')
  })
  // Cannot divide by zero
  it('should display an error message when asked to divide a number by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Cannot divide by 0');

  })
})
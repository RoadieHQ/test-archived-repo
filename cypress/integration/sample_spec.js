describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to Testing Archived Repos').click();
  })
})

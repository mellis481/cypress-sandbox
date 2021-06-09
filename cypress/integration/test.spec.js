describe('Hooks', () => {
  before(() => {
    cy.log('I run once before all tests in this describe');
    cy.visit('/');
  });

  it('test opacity', () => {
    cy.get('[data-testid="visible"]').should('exist');
    cy.get('[data-testid="hidden"]').should('not.exist');
  });
});

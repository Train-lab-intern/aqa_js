describe('Backend main page', () => {
  it('Check main page data', () => {
    cy.fixture('main-page-data.json').then((data) => {
      cy.request('GET', '/1').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.deep.equal(data);
      });
    });
  });
});

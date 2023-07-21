describe("Backend main page", () => {
  it("Check ST-1.1 text", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.task(
        "connectDB",
        `SELECT text FROM frontend_data WHERE frontend_id='1.1'`
      ).then((result) => expect(res.body[1.1]).to.equal(result[0].text));
    });
  });
});

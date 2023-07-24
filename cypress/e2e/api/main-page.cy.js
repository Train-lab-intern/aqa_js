describe("Backend main page", () => {
  it("Check that ST-1.1 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.1]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.1'`
      ).then((result) => expect(res.body[1.1]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.2 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.2]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.2'`
      ).then((result) => expect(res.body[1.2]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.3 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.3]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.3'`
      ).then((result) => expect(res.body[1.3]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.4 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.4]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.4'`
      ).then((result) => expect(res.body[1.4]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.5 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.5]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.5'`
      ).then((result) => expect(res.body[1.5]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.6 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.6]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.6'`
      ).then((result) => expect(res.body[1.6]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.7 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.7]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.7'`
      ).then((result) => expect(res.body[1.7]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.8 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.8]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.8'`
      ).then((result) => expect(res.body[1.8]).to.equal(result.rows[0].text));
    });
  });

  it("Check that ST-1.9 text from database", () => {
    cy.request(
      "GET",
      "https://back-test-4zwpv.ondigitalocean.app/front/pages/1"
    ).then((res) => {
      cy.log(res.body[1.9]);
      cy.task(
        "connectDB",
        `SELECT text FROM public.frontend_data WHERE front_id='1.9'`
      ).then((result) => expect(res.body[1.9]).to.equal(result.rows[0].text));
    });
  });
});

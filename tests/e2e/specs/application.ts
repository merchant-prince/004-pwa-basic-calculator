describe("Application", () => {
  it("renders the application", () => {
    cy.request("/").then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

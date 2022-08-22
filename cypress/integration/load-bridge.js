describe("Keptn's Bridge", () => {
  it("successfully loads dashboard", () => {
    cy.visit("http://api-gateway-nginx.keptn.svc.cluster.local/bridge", {
            headers: {
                authorization: Cypress.env('BRIDGE_AUTHORIZATION')
            },
            failOnStatusCode: false
        });

    cy.contains(
      "Keptn"
    ).should("be.visible");

    cy.contains(
      "Create a new project"
    ).should("be.visible");
  });
});

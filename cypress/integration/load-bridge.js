describe("Keptn's Bridge", () => {
  it("successfully loads dashboard", () => {
    cy.visit("http://api-gateway-nginx.keptn.svc.cluster.local/bridge", {
            auth: {
                username: Cypress.env('BRIDGE_BASICAUTH_USER'),
                password: Cypress.env('BRIDGE_BASICAUTH_PASSWORD')
            }
        });

    cy.contains(
      "Keptn"
    ).should("be.visible");

    cy.contains(
      "Create a new project"
    ).should("be.visible");
  });
});

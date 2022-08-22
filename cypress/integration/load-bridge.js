describe("Keptn's Bridge", () => {
  it("successfully loads dashboard", () => {
    cy.visit("http://api-gateway-nginx.keptn.svc.cluster.local/bridge");

    cy.contains(
      "Keptn"
    ).should("be.visible");

    cy.contains(
      "Create a new project"
    ).should("be.visible");
  });
});

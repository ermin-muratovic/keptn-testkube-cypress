describe("Keptn's Bridge", () => {
  before(() => {
    // accept version check, to prevent popup
    localStorage.setItem('keptn_versioncheck', JSON.stringify({ enabled: true, time: 1647880061049 }));
    
    // Visit Keptn Bridge
    cy.visit("http://api-gateway-nginx.keptn.svc.cluster.local/bridge", {
        auth: {
            username: Cypress.env('BRIDGE_BASICAUTH_USER'),
            password: Cypress.env('BRIDGE_BASICAUTH_PASSWORD')
        }
    });
  });
  
  it("visit dashboard", () => {
    // check that Keptn is rendered
    cy.contains("Keptn").should("be.visible");
    // check that "Create a new project" button exists
    cy.contains("Create a new project").should("be.visible");
  });
  
  it("visit first project from dashboard", () => {
    // click on first project tile in dashboard
    cy.get('ktb-project-tile').first().click();
    // check that "Trigger a new sequence" button exists
    cy.contains("Trigger a new sequence").should("be.visible");
  });
});

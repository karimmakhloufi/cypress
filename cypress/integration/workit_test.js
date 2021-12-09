describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://staging.woohp.wns.wilders.dev/");
    const mailInput = cy.get("input[type='email']");
    mailInput.clear();
    mailInput.type("fake@email.com", { delay: 300 });
    mailInput.clear();
    mailInput.type("c'est fou la technologie", { delay: 300 });
    mailInput.clear();
    mailInput.type("alicia@gmail.com", { delay: 300 });
    cy.contains("se connecter").click();
    cy.contains("Alicia");
    cy.contains("Bibliothèque").click();
    cy.contains("chers");
  });
});

describe("membuat Constructor", () => {
  it("membuat Constructor", () => {
    // Membuat Constructor

    class Customer {
      constructor() {
        console.info("Membuat Constructor");
      }
    }

    new Customer();

    const customer = new Customer();

    expect(customer).toBeDefined();
  });
});

describe("membuat Properties", () => {
  it("membuat Properties", () => {
    class Customer {
      readonly id: number;
      name: string;
      age?: number;
      constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
      }
    }

    const customer = new Customer(1, "Audyari W");

    customer.age = 41;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);

    console.log(customer);
  });
});

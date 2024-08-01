describe("Properties Default Value", () => {
    it("Properties Default Value", () => {
      class Customer {
        readonly id: number;
        name: string = "Audyari W";
        age?: number;
        constructor(id: number) {
          this.id = id;
          
        }
      }
  
     const customer = new Customer(1);
  
      customer.age = 41;
  
      console.info(customer.id);
      console.info(customer.name);
      console.info(customer.age);
  
      console.log(customer);
    });
  });
  
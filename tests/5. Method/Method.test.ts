describe("membuat Method", () => {
    it("membuat Method", () => {
        // Membuat Method
        class Customer {
            readonly id: number;
            name: string;
            age?: number;
            constructor(id: number, name: string) {
              this.id = id;
              this.name = name;
              
            }

            sayHello(name: string): void {
              console.info(`Hello ${name}, my name is ${this.name}, my age is ${this.age}`);
            }
          }
      
        const customer = new Customer(1, "Audyari W");
        customer.age = 41;

        customer.sayHello("ASEP");
        });
      });
      
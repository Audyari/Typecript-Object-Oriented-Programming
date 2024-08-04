describe("Interface Inheritance", () => {
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  it("Interface Inheritance", () => {
    class Person implements HasName, CanSayHello {
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      sayHello(name: string): void {
        console.log(`Hello ${name}`);
      }
    }

    const person = new Person("Audyari W");
    person.sayHello(person.name);
    person.sayHello("ASEP");
  });
});

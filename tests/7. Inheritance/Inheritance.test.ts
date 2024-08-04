describe("Inheritance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("Inheritance", () => {
    // Inheritance
    const employee = new Employee("Audy1");
    console.info(employee.name); // Audy1

    const manager = new Manager("Audy2");
    console.info(manager.name); // Audy2

    const director = new Director("Audy3");
    console.info(director.name); // Audy3
  });
});

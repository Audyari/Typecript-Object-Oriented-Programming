describe("Getter dan Setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "Error: Name is not defined";
      }
    }

    set name(value: string) {
      if (value != "") {
        this._name = value;
      }
    }
  }

  it("Getter dan Setter", () => {
    // Getter dan Setter

    const category = new Category();
    
    console.log("Category.name", category.name);

    category.name = "Programming";
    console.log("Category.name", category.name);

    category.name = "";
    console.log("Category.name", category.name);

  });
});

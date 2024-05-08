class Car {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    displayInfo(): void {
      console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`);
    }
  }
  
  // Sample Usage
  const myCar = new Car("Toyota", "Corolla", 2020);
  myCar.displayInfo(); // Output: "Your car model is:  2020 Toyota Corolla"
  
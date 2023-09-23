class Vehicle {
  color: string = "blue";
  isBroken: boolean;
  //   drive(): void {
  //     console.log("brum brum");
  //   }
  constructor(isBroken: boolean) {
    this.isBroken = isBroken;
  }
  honk(): void {
    console.log("beep");
  }
  protected test(): void {
    console.log("Hello test");
  }
}
const vehicle1 = new Vehicle(false);
vehicle1.honk();

class Car extends Vehicle {
  // Can use only inside Car class
  constructor(public isOld: string, isBroken: boolean) {
    super(isBroken);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
  }
  protected test(): void {
    console.log("Hello test Car");
  }
  startTest(): void {
    this.test();
  }
}
const car1 = new Car("not old", true);
// can't use private method outside of class
// car1.drive();
car1.startDrivingProcess();
car1.startTest();

console.log(car1.color);
console.log(`Car is broken? ${car1.isBroken}`);
console.log(`Vehicle is broken? ${vehicle1.isBroken}`);
console.log(`Car is old? ${car1.isOld}`);

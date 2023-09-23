var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    //   drive(): void {
    //     console.log("brum brum");
    //   }
    function Vehicle(isBroken) {
        this.color = "blue";
        this.isBroken = isBroken;
    }
    Vehicle.prototype.honk = function () {
        console.log("beep");
    };
    Vehicle.prototype.test = function () {
        console.log("Hello test");
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle(false);
vehicle1.honk();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    // Can use only inside Car class
    function Car(isOld) {
        var _this = 
        // super() is used to call constructor of parent class
        _super.call(this, true) || this;
        _this.isOld = isOld;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("vroom");
    };
    Car.prototype.startDrivingProcess = function () {
        this.drive();
    };
    Car.prototype.test = function () {
        console.log("Hello test Car");
    };
    Car.prototype.startTest = function () {
        this.test();
    };
    return Car;
}(Vehicle));
var car1 = new Car("not old");
// can't use private method outside of class
// car1.drive();
car1.startDrivingProcess();
car1.startTest();
console.log(car1.color);
console.log("Car is broken? ".concat(car1.isBroken));
console.log("Vehicle is broken? ".concat(vehicle1.isBroken));
console.log("Car is old? ".concat(car1.isOld));

var carMakers = ['ford', 'toyota', 'chevy'];
console.log(carMakers);
var dates = [new Date(), new Date()]; // type inference
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]; // type annotation
// Help with inference when extracting values
var car2 = carMakers.pop();
console.log(car2);
// Prevent incompatible values
// const myCar = carMakers.push(100);
// Help with 'map'
var mapCarmaker = carMakers.map(function (car) {
    return car.toUpperCase();
});
console.log("carMakers after map: ", mapCarmaker);
// Flexible types
// inference
var importantDates = [new Date(), '2030-10-10'];
// annotation
var importantDates2 = [new Date(), '2030-10-10', 100];
console.log(importantDates2);
importantDates2.push('Hello');
console.log(importantDates2);

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
console.log(carMakers);
const dates = [new Date(), new Date()];// type inference
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];// type annotation

// Help with inference when extracting values
const car2 = carMakers.pop();
console.log(car2);

// Prevent incompatible values
// const myCar = carMakers.push(100);

// Help with 'map'
const mapCarmaker: string[] = carMakers.map((car: string): string => {
    return car.toUpperCase();
})
console.log("carMakers after map: ", mapCarmaker);

// Flexible types
// inference
const importantDates = [new Date(), '2030-10-10'];

// annotation
const importantDates2:(string | number | Date)[] = [new Date(), '2030-10-10', 100];
console.log(importantDates2);

importantDates2.push('Hello');
console.log(importantDates2);

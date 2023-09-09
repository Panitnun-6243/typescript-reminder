// premitive types
let apple: number = 5;

apple = 10;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let pet: string[] = ['cat', 'dog', 'pig'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {

}

let car: Car = new Car();

// object literal
let point: {x: number, y: number, z: string} = {
    x: 10,
    y: 20,
    z: "30"
}

// function
const logMessage: (m: string) => void = (m: string) => {
    console.log(m);
}

logMessage("Hello World")

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: string, y: string} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] == "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

console.log(numberAboveZero);
console.log("test github auth");
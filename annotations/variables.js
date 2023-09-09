// premitive types
var apple = 5;
apple = 10;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// array
var pet = ['cat', 'dog', 'pig'];
var myNumbers = [1, 2, 3];
var truths = [true, false, true];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// object literal
var point = {
    x: 10,
    y: 20,
    z: "30"
};
// function
var logMessage = function (m) {
    console.log(m);
};
logMessage("Hello World");
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// 2) When we declare a variable on one line
// and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(numberAboveZero);

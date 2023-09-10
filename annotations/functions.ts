// const add: (a: number, b: number) => number = (a, b) => {
//     return a + b;
// }

const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

logger("Hello World");

const throwError = (message: string): never => {
    throw new Error(message);
}

const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
}

const throwError3 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

// Destructuring with Annotations
const todaysWeather: { date: Date, weather: string } = { date: new Date(), weather: 'sunny' };

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);
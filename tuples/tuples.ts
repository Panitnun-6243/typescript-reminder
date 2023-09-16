const drinkObject = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// array
const drinkArray = ['brown', true, 40];

// type alias
type Drink = [string, boolean, number];

// tuple
const drinkTuple: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];

const pepsi: Drink = ['red', true, 100];

// pepsi[0] = 40; // error
console.log(pepsi);
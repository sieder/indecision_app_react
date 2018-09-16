//arguments object - no longer boung with arrow functions

const add = (a, b) => {
    return a + b;
};
console.log(add(12, 2));

// this keyword no longer bound

const user = {
    name: 'Sieder',
    cities: ['Makati', 'Taguig', 'Pasig'],
    printPlacesLived() {
        //map array similar to forEach
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};
console.log(multiplier.multiply());
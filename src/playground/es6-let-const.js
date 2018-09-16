var nameVar = 'sieder';
var nameVar = 'test'
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const nameConst = 'Gunther';
// nameConst = 'this';
// console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Sieder Villareal';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
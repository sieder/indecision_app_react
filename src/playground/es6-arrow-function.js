// const square = function (x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4))

const myFullnName = 'Sieder Villareal';
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
const getLastName = (fullName) => fullName.split(' ')[1];


console.log(getFirstName(myFullnName) + ' ' + getLastName(myFullnName));
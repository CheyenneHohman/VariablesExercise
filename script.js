// CONST is the variable type that will not change (constant)

let num = 20;
num = 15;
num += 7; //22 
//num = num + 7;
num --; //21
num = "This is not a number"

let blank;
console.log(blank); //undefined

blank = null;

//BONUS

const quarter = 0.25, dime = 0.10, nickel = 0.05, penny = 0.01;
// const [quarter, dime, nickel, penny] = [0.25, 0.10, 0.05, 0.01];

console.log(quarter, dime, nickel, penny);

let letters = "qwertyuiop"
console.log(letters[letters.length-1]);
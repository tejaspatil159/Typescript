export {};
let greet = "Hello";
console.log(greet);

//-----------------------variable declartion------------------
//let and var

let a = 10;
let b = 20;
let sum;
sum = a + b;
console.log(sum);

//const must be initiallized with value
//const title;
const title = "typescript";

//-------------------------variable types----------------------

//----------------1 boolean
//----------------2 number
//----------------3 string

let isEnable: boolean = true;
let pie: number = 3.14;
const name: string = "Tejas";

//--------Template string

let identity = `I am ${name}, value of pie is ${pie} your value is ${isEnable}`;
console.log(identity);

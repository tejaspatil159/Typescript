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

//----------------4 null
//----------------5 undefined
let n: null = null;
let u: undefined = undefined;

//dont use
//let value: boolean = null;
//let myName: string = undefined;

//----------------6 array

let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

console.log(list);
console.log(list2);

//----------------7 tuple

let person: [string, number] = ["bruce", 26];
console.log(person);

//----------------8 enum

enum color {
  red,
  blue = 10,
  green,
}

let c1: color = color.red;
let c2: color = color.blue;
let c3: color = color.green;
console.log(c1);
console.log(c2);
console.log(c3);

//----------------9 any
//not good
let num: any = 10;
num = "hello";

let sub: any = 20;
console.log(sub.name);
// sub();
//sub.toUpperCase();

//----------------9 unknown
//alternative to any and preffered

let city: unknown = "mumbai";
let upperCaseCity: string = (city as string).toUpperCase();
console.log(upperCaseCity);

//----------------type inference

//only declaration is not good practice here type inference not work
let item;
item = true;
item = 20;

//declaration along with initiallization is good practice where type inference works
let istrue = true;
//istrue=20  here error occurs

//----------------union types

let multitype: number | string;
multitype = "ten";
multitype = 10;

console.log(multitype);

//-------------------------functions----------------------

function divide(num1: number, num2: number): number {
  return num1 / num2;
}
console.log(divide(20, 5));

//----------------optional parameter in function
//we can have multiple optional parameter but it should be after required parameters

const mul = (num1: number, num2?: number): number => {
  if (num2) {
    return num1 * num2;
  } else {
    return num1;
  }
};

console.log(mul(20, 5));
console.log(mul(20));

//----------------default parameter in function

function exponential(num1: number, num2: number = 3) {
  return num1 ** num2;
}

console.log(exponential(2));
console.log(exponential(3, 2));

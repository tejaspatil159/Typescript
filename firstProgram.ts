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
sub();
sub.toUpperCase();

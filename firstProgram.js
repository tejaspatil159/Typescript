"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "Hello";
console.log(greet);
//-----------------------variable declartion------------------
//let and var
var a = 10;
var b = 20;
var sum;
sum = a + b;
console.log(sum);
//const must be initiallized with value
//const title;
var title = "typescript";
//-------------------------variable types----------------------
//----------------1 boolean
//----------------2 number
//----------------3 string
var isEnable = true;
var pie = 3.14;
var name = "Tejas";
//--------Template string
var identity = "I am ".concat(name, ", value of pie is ").concat(pie, " your value is ").concat(isEnable);
console.log(identity);
//----------------4 null
//----------------5 undefined
var n = null;
var u = undefined;
//dont use
//let value: boolean = null;
//let myName: string = undefined;
//----------------6 array
var list = [1, 2, 3];
var list2 = [4, 5, 6];
console.log(list);
console.log(list2);
//----------------7 tuple
var person = ["bruce", 26];
console.log(person);
//----------------8 enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 10] = "blue";
    color[color["green"] = 11] = "green";
})(color || (color = {}));
var c1 = color.red;
var c2 = color.blue;
var c3 = color.green;
console.log(c1);
console.log(c2);
console.log(c3);
//----------------9 any
//not good
var num = 10;
num = "hello";
var sub = 20;
console.log(sub.name);
// sub();
//sub.toUpperCase();
//----------------9 unknown
//alternative to any
var city = "mumbai";
var upperCaseCity = city.toUpperCase();
console.log(upperCaseCity);

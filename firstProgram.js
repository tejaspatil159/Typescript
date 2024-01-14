"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//alternative to any and preffered
var city = "mumbai";
var upperCaseCity = city.toUpperCase();
console.log(upperCaseCity);
//----------------type inference
//only declaration is not good practice here type inference not work
var item;
item = true;
item = 20;
//declaration along with initiallization is good practice where type inference works
var istrue = true;
//istrue=20  here error occurs
//----------------union types
var multitype;
multitype = "ten";
multitype = 10;
console.log(multitype);
//-------------------------functions----------------------
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(20, 5));
//----------------optional parameter in function
//we can have multiple optional parameter but it should be after required parameters
var mul = function (num1, num2) {
    if (num2) {
        return num1 * num2;
    }
    else {
        return num1;
    }
};
console.log(mul(20, 5));
console.log(mul(20));
//----------------default parameter in function
function exponential(num1, num2) {
    if (num2 === void 0) { num2 = 3; }
    return Math.pow(num1, num2);
}
console.log(exponential(2));
console.log(exponential(3, 2));
function fullName(person) {
    console.log("".concat(person.fName, " ").concat(person.lName));
}
var p = {
    fName: "Tejas",
};
fullName(p);
//-------------------------Class----------------------
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return employee;
}());
var emp1 = new employee("Tejas");
console.log(emp1.employeeName);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.greetManager = function () {
        console.log("Good morning manager ".concat(this.employeeName));
    };
    return manager;
}(employee));
var m1 = new manager("Sobhen");
m1.greetManager();
m1.greet();
console.log(m1.employeeName);
//-------------------------access modifiers----------------------
//1.public
//2.private
//3/protected

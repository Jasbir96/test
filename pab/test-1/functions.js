// function statement
// function (param) {
//     console.log("hello from fn", param);
// }

// let fs = require("fs");

// fn("hi");
// // IIFEE-> immediately invoked function expression
// (function iifee() {
//     console.log("I will run immediately");
// })()

// arguments -> pre es6
// function varParam(param) {

//     console.log(arguments[0]);
//     console.log(arguments["0"]);
//     // console.log(arguments[1]);
//     console.log(param)
// }
// // after es6
// function varParam(...param){
//     console.log(param);
// }

// varParam();
// varParam("ab");
// varParam("a", "b");


// expression
//  you can assign a value or address of one variable to another
//  you can also assign address of a function to  a variable;
// js treats functions also  as a variable
// 
// let a=[10,20,30];
// let b=a;
// console.log(b);

// let fnaddressHolder = function () {
//     console.log("I am expression");
//     return 10;
// }
// console.log(fnaddressHolder+"");
// let rval = fnaddressHolder();
// console.log(rval);
// oops ,functional programming ,async use case

// let real = function fn() {
//     console.log(" I am real");
// }
// let real = function fn() {
//     console.log("I am fake");
// }
// real();


// es6
let a = 10;
let singleQuote = 'Hi i am a \nstring and variable is ' + a;
let doubleQuotes = "Hi i am also a \nstring and variable is " + a;
// multiple line string
let templateString = `Hi i am a template string 
and  variable is ${a} asd,kgnnskvnksdj`;
console.log(singleQuote);
console.log(doubleQuotes);
console.log(templateString);








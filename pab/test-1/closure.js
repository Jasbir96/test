// functions js -> variables
// variable-> assignment , 
//  function expression 
// // passed as a parameter-> functional programming
// function fn(a) {
//     console.log(a);
//     a();
// }
// // fn("a");
// // fn(10);
// function inner() {
//     console.log("Hello I am Inner");
// }
// fn(inner)


// variable return from a function
// function fn() {
//     return 10;
// }
// let rVal=fn();
 
// console.log(rVal);
function outer() {

    console.log("I am outer");
    console.log("returning inner");
    return function inner() {
        console.log("Hello I am Inner");
    }
}
let rVal = outer();
console.log(rVal);
rVal();
// let fName=10;
// function printName() {
//     console.log(fName);
//     console.log("returning print full Name");
//     return function printFullName(lastName) {
//         console.log(fName + " " + lastName);
//     }
// }
// let rVal = printName("Steve");
// console.log("```````````````````````")
// console.log("```````````````````````");
// fName=20;
// rVal("Rogers");
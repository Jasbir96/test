// var a;
// var a;
// a=10;
// console.log(a);
// redeclare->no
// let a;
// let a;
// block -> 
// {

// }
// let are block scope
// const a = 10;
// {
//     const a = 20;
//     console.log(a);
//     {

//         const a = 30;
//         console.log(a);
//         {

//             console.log(a);
//         }
//     }
// }
// console.log(a);
// let ->block scope, can't be redeclared, 
// they can't be accessed before declaration
// Identifier 'a' has already been declared
// let a;
// let a;
// Cannot access 'a' before initialization
// console.log(a);
// let a;
// const make value or address
// let abc=require("path");
// abc=1234;
// abc.join();
// let a=10;
// a=20;
// console.log(a);
// Assignment to constant variable
// const varName=10;
// varName=20;
// Missing initializer in const declaration
// const a;

// redeclare ,can be accessed before declaration
// console.log(a);
// var a = 10;
// var a = 20;
// console.log(a);

var varName = 10;
function fn() {
    var varName = 20;
    varName++;
    console.log("59", varName);
    function a() {
        console.log("61", varName);
        var varName = 30;
        console.log("63", varName);
    }
    a();
    console.log("65", varName);

}
console.log("68", varName);
fn();
console.log("70", varName);











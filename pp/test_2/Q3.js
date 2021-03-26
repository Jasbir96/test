// function fn(x) {
//     return function (y) {
//         return x * y;
//     }
// }

// function fn1(x, y) {
//     return x * y;
// }
// let a = fn(10)(20);
// a = fn1(10, 20);

function fn(x, y) {
    if (arguments.length == 1) {
        return function inner(y) {
            return x * y;
        }
    } else {
        return x * y;
    }
}
// let ans = fn(10)(20);
let rfnAddr = fn(10);
console.log("`````````````````````````");
console.log(rfnAddr(20));
// console.log("ans", ans);
ans = fn(10, 20)
console.log("ans", ans);
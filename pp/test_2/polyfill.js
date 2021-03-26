
// function myMap(arr, cb) {
//     let tArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let ans = cb(arr[i]);
//         tArr.push(ans);
//     }
//     return tArr;

// }
// let newArr = myMap(arr, squarer);


// classes ->house ->  blueprint -> object -> house instance (classical oops)(Java)

// protoype -> house -> object -> house (protypal oops)(JS)
// parent
// inheritance

Array.prototype.myMap = function (cb) {
    let tArr = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        tArr.push(ans);
    }
    return tArr;
}
let arr = [10, 20, 30, 40];
let arr2 = [100, 200, 300, 400];
let newArr = arr.myMap(squarer);
let cubeArr = arr2.myMap(cuber);

console.log("New Arr", newArr);
console.log("New Arr", cubeArr);
function squarer(a) {
    return a * a;
}
function cuber(a) {
    return a * a * a;
}
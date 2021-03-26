console.log("Before");
function cb() {
    console.log("i will be called after 2 second");
}
// setTimeout(cb, 2000);
let finisher = setInterval(cb, 2000);
setTimeout(function fn() {
    clearInterval(finisher);
    console.log("set Interval stopped");
},10080)
console.log("After");
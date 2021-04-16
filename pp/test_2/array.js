let a = ["a", "b"]
a[2] = a
function f(a) {
    a = a[2]
    console.log(a);
    let n = Array("a", "b","1");
    console.log(n);
    console.log(a[2] = n);
    console.log(a);
    console.log(n);
    a = n;
    console.log(a);
}
console.log(a);
f(a)
console.log(a);
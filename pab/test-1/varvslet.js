// var a;
// var a;
// a=10;
// console.log(a);
// redeclare->no

// let a;
// let a;
// block -> 
let a = 10;
{
    let a = 20;
    console.log(a);
    {
        let a = 30;
        console.log(a);
        {

            console.log(a);
        }
    }
}
console.log(a);
function fn(param) {
    // param();
    console.log("I am param ", param);
    console.log("I am param ", param(10));
    
}
// functions are also treated as variables
// fn(10);
// fn([10, 20, 30]);
function cb(varName) {
    console.log(varName);
    console.log("I am cb");
    return 20;
}
fn(cb);
// left to right
// /functions are varibales
//  functions invoke -> code run 
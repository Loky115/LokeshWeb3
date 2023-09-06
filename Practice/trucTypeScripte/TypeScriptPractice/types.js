// var let const
function f(shouldInitialize) {
    //let x: number;  // 3
    var x = 4;
    //const x = 4; // 5
    //x=20; // 4
    if (shouldInitialize) {
        //var x=10; // 1
        var x = 10; // 2
    }
    return x;
}
console.log(f(true));
console.log(f(false));

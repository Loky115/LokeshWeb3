function squares(array) {
    var result = array.map(function (x) { return x * x; });
    return result;
}
console.log(squares([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

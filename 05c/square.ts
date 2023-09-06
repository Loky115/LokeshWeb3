function squares(array: number[]) {
    const result = array.map(x => x * x);
    return result;
}
console.log(squares([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
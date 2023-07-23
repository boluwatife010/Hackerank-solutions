// Algorithm for adding a sum within an array.
// function simpleArraySum(num) {
//     num = [1, 4, 5, 7, 10];
// let sum = 0;
// for (let i = 0;  i < num.length; sum += num[i++] );
// return sum;
// }
// let result = simpleArraySum();
// console.log(result);
function simpleArraySum(num) {
    let n = num.length;
    let newValue = num.reduce((accum, value) => accum + value);
    // console.log(newValue);
    return newValue;
}
console.log(simpleArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
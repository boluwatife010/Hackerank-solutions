// function lonelyInteger(a) {
//     let uniqueValue = a[0];
//     for (let i = 1; i < a.length; i++) {
//         uniqueValue ^= a[i];
//         return uniqueValue;
//     }
// }
function lonelyInteger(x) {
    return x.reduce((a, c) => a^c);
}
console.log(lonelyInteger([1, 1, 2, 2, 3, 4, 4]));
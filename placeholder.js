// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//  let newValue = 0;
//  newValue += arr[i];
//  console.log(newValue); 
// }
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Output: 15



// let array = [[1,3], [2,4]];
// let newValue = (array[1][1] * array [0][0]) -(array[0][1] * array[1][0]);
// console.log(array);
// console.log(newValue);
// let value = 135;
// let piValue = Math.PI;
// let result = value * piValue;
// console.log(result.toFixed(2));

// let array = [1, 1, 3, 2, 2, 4, 4];
// for (let i = 0; i <array.length; i++) {
//     let uniqueValue = array[i];
//     console.log(uniqueValue);
// }
// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7];
// const uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);
// console.log(uniqueArr); // [1, 2, 3, 4, 5, 6, 7]

// function lonelyIntegers(arr) {
//     let uniqueValue = arr.filter(function value() {
//         let comparison = arr.indexOf (value) === arr.lastIndexOf (value);
//         return comparison;
       
//     }
//     )
//     return uniqueValue;
//     [0] || -1;
// }
// let value = [1,1, 3, 4, 5, 4, 1 ,3];

// console.log(lonelyIntegers(value));
/*
function lonelyinteger(a) {
    let loneValue=a[0];
     for(let i=1; i<a.length; i++)
         loneValue ^= a[i];
     return loneValue;
 }
console.log(lonelyinteger([1,2,2,3,3,4,5,5]));
*/
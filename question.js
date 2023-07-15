// Calculation of the ratio of elements in an array
let valOne;
let val;
let valTwo;
let valThree;
function aPreciseFunction(arr) {
    let n = arr.length;
    
    valOne = arr.filter(val => val < 0).length;
    let negative = valOne / n;
    
            
    valTwo = arr.filter(val => val > 0).length;
    let positive = valTwo / n;
   

    valThree = arr.filter(val => val == 0).length;
    let  neutral = valThree / n;

    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + neutral.toFixed(6));
       
    
   
}
aPreciseFunction([1,2,-1,-2,0]);
// function preciseFraction(arr) {
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     if (i < 0) {
//         let valOne = arr.filter().length;
//         let negative = valOne / n;
//     }
//     else if ( i > 0) {
//         let valTwo = arr.filter().length;
//         let positive = valTwo / n;
//     }
//     else {
//         let valThree = arr.filter().length;
//         let neutral = valThree / n;
//     }
//     return positive, negative, neutral;
// }
// }
//console.log(preciseFraction([1,2,-1,-2,0]).toFixed(6));
// let valueOne, valueTwo, valueThree;
// Declaration of the required variables
// valueOne = 0;
// valueTwo = 0;
// valueThree = 0;

// function Precision(arr) {
//     let n = arr.length;
//     for(let i = 0; i < arr.length; i++) {
//         if (i < 0) {
//             valueOne += 1;
//         }
//         else if (i > 0) {
//             valueTwo += 1;
//         }
//         else {
//             valueThree += 1
//         }
//     }
//    let positive = valueOne / n;
//    let negative = valueTwo /n;
//    let neutral = valueThree /n;
//    return positive, negative, neutral;

// }
// console.log(Precision([1,2,-1,-2,0]).toFixed(6));

// let arr = [-1, -2, 0, 1, 2, 3];
// let n = arr.length;
// let value;
// let valueTwo;
// let valueThree;
// console.log(n);
// for(let i = 0; i < n; i++ ) {
//     if (arr[i] < 0) {
//        value = arr[i];
//        let negative = value / n;
//        console.log(negative.toFixed(6));
//     }
//     else if (arr[i] > 0) {
//         valueTwo = arr[i];
//         let positive = valueTwo / n;
//         console.log(positive.toFixed(6));
//     }
//    else (arr[i] == 0) 
//    valueThree = arr[i];
//    let neutral = valueThree / n;
//    console.log(neutral.toFixed(6));
// }

// if (arr.length < 0) {
//     newValue = 
//     console.log();
// }

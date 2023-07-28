//Minmax alternative
function minMax(arr) {
let sum = arr.reduce((a, b) => a + b);
let max = Math.max(...arr);
let min = Math.min(...arr);
let maxValue, minValue;
maxValue =sum - max;
minValue = sum - min;
return minValue, maxValue;
}
console.log(minMax([1, 2, 3, 4, 5]));
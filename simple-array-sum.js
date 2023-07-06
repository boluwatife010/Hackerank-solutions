// Algorithm for adding a sum within an array.
function simpleArraySum(num) {
    num = [1, 4, 5, 7, 10];
let sum = 0;
for (let i = 0;  i < num.length; sum += num[i++] );
return sum;
}
let result = simpleArraySum();
console.log(result);
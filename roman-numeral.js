let arr = [7, 69, 2, 221, 8974, 45];
let sumOne, sumTwo, sumThree, sumFour, sumFive;
sumOne = arr[0] + arr[1] + arr[2] + arr[3];
sumTwo = arr[1] + arr[2] + arr[3] + arr[4];
sumThree = arr[2] + arr[3] + arr[4] + arr[0];
sumFour = arr[3] + arr[4] + arr[0] + arr[1];
sumFive = arr[4] + arr[0] + arr[1] + arr[2];
let newTruth = sumOne > sumTwo > sumThree > sumFour > sumFive;
console.log(sumOne, sumTwo, sumThree, sumFour, sumFive);
console.log(newTruth);
let maximumValue = Math.max(sumOne, sumTwo, sumThree, sumFour, sumFive);
let minimumValue = Math.min(sumOne, sumTwo, sumThree, sumFour, sumFive);
console.log(maximumValue, minimumValue);



function minMaxSum(arr) {
    let sumOne, sumTwo, sumThree, sumFour, sumFive;
    let n = arr.length
    
            sumOne = arr[0] + arr[1] + arr[2] + arr[3];
            sumTwo = arr[1] + arr[2] + arr[3] + arr[4];
            sumThree = arr[2] + arr[3] + arr[4] + arr[0];
            sumFour = arr[3] + arr[4] + arr[0] + arr[1];
            sumFive = arr[4] + arr[0] + arr[1] + arr[2];
           let maximumValue = Math.max(sumOne, sumTwo, sumThree, sumFour, sumFive);
           let minimumValue = Math.min(sumOne, sumTwo, sumThree, sumFour, sumFive);
           return console.log(minimumValue, maximumValue);
     
        
    
}
minMaxSum([7, 69, 2, 221, 8974]);
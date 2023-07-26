function plusMinus(arr) {
    // Write your code here
    var positiveNum = 0;
    var negativeNum = 0;
    var zeroNum = 0;
    var num = arr.length;
    for (var i = 0; i < num; i++) {
        if (arr[i] > 0) {
            positiveNum += 1;
        }
        else if (arr[i] === 0) {
            zeroNum += 1;
        }
        else {
            negativeNum += 1;
        }
    }
    console.log((positiveNum / arr.length).toFixed(6));
    console.log((negativeNum / arr.length).toFixed(6));
    console.log((zeroNum / arr.length).toFixed(6));
}
plusMinus([-1, -1, 0, 0, 1, 1]);

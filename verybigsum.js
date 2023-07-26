function aVeryBigSum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
console.log(aVeryBigSum([2, 3, 4, 5, 6]));

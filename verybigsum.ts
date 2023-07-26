function aVeryBigSum(ar: number[]) {
    let sum: number = 0;
    for(let i = 0; i < ar.length; i++) {
        sum += ar[i];
        
    }
    return sum;
}
console.log(aVeryBigSum([2, 3, 4, 5, 6]));

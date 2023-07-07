function aVeryBigSum(ar){
    ar = [56, 20, 11];
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
    sum += ar[i];
    }
    return sum;
    }
    let summation = aVeryBigSum();
    console.log(summation);
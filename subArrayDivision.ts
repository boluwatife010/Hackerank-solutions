function birthday (s: number[], d: number, m: number) {
    let sum1 = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
       let sum2 = 0;
       for (let j = 0; j < m; j++) {
        sum2 += s[i + j];
       }
       if (sum2 === d) {
            sum1++;
       }
    }
    return sum1;
}
console.log(birthday([1, 2, 3, 1, 2], 3, 2));
// We are to print the length of ways an array can be sub-divided.
// d is the sum of the length of the array.
// m is the length of the array.
// s is the array itself.
//STEPS
/*
-> First loop through s
->state the condition that 2 elements must add up to d
-> if any of the elements in s sum up to d...
-> print the number of ways or length in which it can be achieved
*/ 
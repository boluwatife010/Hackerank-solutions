function birthdayCakeCandles(candles: number[]) {
    let maximum = Math.max(...candles);
    return candles.filter(num => num === maximum).length;
}
console.log(birthdayCakeCandles([1, 2, 2, 4, 5, 6, 6, 6]));
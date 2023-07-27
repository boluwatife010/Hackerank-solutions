function birthdayCakeCandles(candles) {
    var maximum = Math.max.apply(Math, candles);
    return candles.filter(function (num) { return num === maximum; }).length;
}
console.log(birthdayCakeCandles([1, 2, 2, 4, 5, 6, 6, 6]));

function compareTriplets(a, b) {
    var scoreboard = [0, 0];
    for (var i = 0; i <= 2; i++) {
        if (a[i] > b[i]) {
            scoreboard[0] += 1;
        }
        else if (a[i] < b[i]) {
            scoreboard[1] += 1;
        }
        else if (a[i] === b[i]) {
            scoreboard = scoreboard;
        }
    }
    return scoreboard;
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));

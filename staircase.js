function staircase(n) {
    var hash = '#';
    var space = ' ';
    for (var i = 1; i <= n; i++) {
        var spacep = space.repeat(n - i);
        var hashp = hash.repeat(i);
        console.log(spacep + hashp);
    }
}
staircase(8);

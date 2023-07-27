function staircase( n: number) {
    let hash= '#';
    let space = ' ';
    for(let i = 1; i <= n; i++) {
        let spacep = space.repeat(n - i);
        let hashp = hash.repeat(i);

        console.log(spacep + hashp);
    }
}
staircase(8);
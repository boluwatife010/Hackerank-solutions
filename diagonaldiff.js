function diagonalDifference (a) {
    let a = [[]];
    let leftDiagonal, rightDiagonal;
    for(let i = 0; i < a.length; i++) {
        leftDiagonal += a[i][i];
        const k = a.length - 1 - i;
        rightDiagonal += a[i][k]; 
    }
    return Math.abs (leftDiagonal - rightDiagonal);
}
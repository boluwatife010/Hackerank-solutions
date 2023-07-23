function towerBreakers(n: number, m: number) {
    if (m === 1 || n % 2 === 0) {
        return 2;
    }
    else {
        return 1;
    }

}
console.log(towerBreakers(5, 6));



/*
T = int(input())
for t in range(T):
    n, m = [int(x) for x in input().strip().split()]
    if m == 1: 
        print(2)
    else:
        if n % 2 == 1:
            print(1)
        else:
            print(2)
*/
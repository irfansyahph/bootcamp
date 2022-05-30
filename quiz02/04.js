
function showPrimeNumber(n) {
    var arr = [2];
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr)
}
showPrimeNumber(100)

function isPrime(n) {
    for (let i = 2; i * i <= n; i++)
        if (n % i === 0)
            return false
    return n > 1;
}
console.log(isPrime(2))
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
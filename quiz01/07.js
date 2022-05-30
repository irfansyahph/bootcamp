/**
 * input 4 digit integer lalu hitung jumlahnya
 */

 function sumDigit(n) {
    sum = n.toString().split('').map(Number).reduce(function (a, b) {
        return a + b;
    }, 0)
    if (isNaN(n)) {
        return "is not number, try again..."
    } else if (n > 10000) {
        return "harus lebih kecil dari 10000"
    } else {
        return sum
    }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...
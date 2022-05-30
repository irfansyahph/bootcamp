/**
 * Convert rupiah to other currency
 */

 function convertToRupiah(money, type) {
    yen = 130.12
    usd = 14382.5
    euro = 16000
    if (money > 0 && type == 'yen') {
        return `Rp.${money * yen}`
    } else if (money > 0 && type == 'usd') {
        return `Rp.${money * usd}`
    } else if (money > 0 && type == 'euro') {
        return `Rp.${money * euro}`
    } else{
        return "no match type currency"
    }
}

console.log(convertToRupiah(1000, 'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100, 'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, 'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, ''));//no match type currency
/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
    for (let i = year1; i <= year2; i++) {
        
    }
}

function isKabisat(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        return `${year} adalah tahun kabisat`
    } else {
        return `${year} bukanlah tahun kabisat`
    }
}

console.log(howManyKabisat(1997, 2021));
console.log(isKabisat(2000))
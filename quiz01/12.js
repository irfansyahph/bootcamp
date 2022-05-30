/** Display year is kabisat and display month */

function getDays(month, year) {
    const days = new Date(year, month, 0).getDate()
    if (isNaN(month) && year > 0) {
        return "inputan bulan harus dalam integer"
    } else if (month > 0 && isNaN(year)) {
        return "inputan tahun harus dalam integer"
    } else if (isNaN(month) && isNaN(year)) {
        return "inputan bulan & tahun harus dalam integer"
    } else if (month > 0 && year > 0 && days === 29) {
        return `this month has ${days}, ${year} adalah tahun kabisat`
    } else {
        return `this month has ${days}`
    }
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
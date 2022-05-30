/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
    const x = end - start
    const y = x / start * 100
    const z = Math.floor(y)
    if (isNaN(start) || isNaN(end)) {
        return "start atau end harus dalam angka"
    } else if (start < end) {
        return `Total kenaikan income ${z}%`
    } else {
        return `Total penurunan income ${z}%`
    }
}

console.log(getProsentase("abc", "bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00, 750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00, 650000.00));//Total penurunan income -14%
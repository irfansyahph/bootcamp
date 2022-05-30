/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


 function getPeriodTimes(seconds) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    if (isNaN(seconds)) {
        return "is not a number"
    } else {
        return `${d} hari ${h} jam ${m} menit ${s} detik`
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
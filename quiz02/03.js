/** buat segitiga  */
let str1 = ""
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= i; j++)
        str1 += j + " "
    str1 += "\n"
}
console.log(str1)
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let str2 = ""
for (let i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--)
        str2 += j + " "
    str2 += "\n"
}
console.log(str2)
// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1  
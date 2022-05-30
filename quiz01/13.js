/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka) {
    const palindrome = angka == angka.toString().split('').reverse().join('')
    if (isNaN(angka)) {
        return "is not a number"
    } else if (palindrome == true) {
        return "is palindrome"
    } else {
        return "is not palindrome"
    }
}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome
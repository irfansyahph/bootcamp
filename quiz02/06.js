
function isPalindrome(word) {
    const lowerCase = word.toLowerCase();
    const checkPalindrome = lowerCase.split('').reverse().join('');
    return (lowerCase === checkPalindrome);
}

console.log(isPalindrome('kasur ini rUsak'));//true
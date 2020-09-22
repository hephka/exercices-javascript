const isPalindrome = (el) => {
    let reverse = "";
    for (let i = el.length - 1; i >= 0; i--) {
      reverse += el[i];
    }
    return el === reverse
}


console.log(isPalindrome('tenet'))
console.log(isPalindrome('Alyra')) 
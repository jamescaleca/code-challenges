// Complete the solution so that the function will break up camel casing, using a space between words.

// Example:

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const arr = string.split('')
    return arr
}

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))
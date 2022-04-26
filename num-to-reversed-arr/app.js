// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example: 
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    const digits = n.toString().split("")
    const realDigits = digits.map(Number)
    return realDigits.reverse()
}

console.log(digitize(35231))
console.log(digitize(0))
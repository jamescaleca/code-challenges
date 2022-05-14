// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)

// The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run

var nbrOfLaps = function(lapALen, lapBLen) {
    var lcm = lowestCommonMultiple(lapALen, lapBLen);
    return [lcm / lapALen, lcm / lapBLen];
}
  
function greatestCommonDivisor(a, b) {
    if (b === 0) return a;
    return greatestCommonDivisor(b, a % b);
}
  
function lowestCommonMultiple(a, b) {
    return Math.abs(a * b) / greatestCommonDivisor(a, b);
}

console.log(nbrOfLaps(5, 3))
console.log(nbrOfLaps(4, 6))
console.log(nbrOfLaps(5, 5))

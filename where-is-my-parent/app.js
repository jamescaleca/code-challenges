// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
    const caseInsensitiveSep = (strA, strB) => strA.toLowerCase().localeCompare(strB.toLowerCase());
	return dancingBrigade.split('').sort().sort(caseInsensitiveSep).join("")
}

console.log(findChildren("beeeEBb")) // BbbEeee
console.log(findChildren("uwwWUueEe")) // EeeUuuWww
console.log(findChildren("abBA")) // AaBb
console.log(findChildren("AaaaaZazzz")) // AaaaaaZzzz
console.log(findChildren("CbcBcbaA")) // AaBbbCcc
console.log(findChildren("xXfuUuuF")) // FfUuuuXx


// different solution:
// const findChildren = dancingBrigade =>
//   [...dancingBrigade].sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`})).join(``);
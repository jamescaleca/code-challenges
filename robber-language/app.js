// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Note: The dashes - in the example are added for readability and should not be included in the output.

// The Assignment
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

// Notes
// Only consonants should be modified; leave all other characters unchanged.
// Both upper and lower case characters will be tested.
// The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
// For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
// Testing
// The tests will challenge your function with sentences of length 0-255, ASCII characters between 32-126 and nothing else.

// Links
// Check out these links for more information:

// https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket

function robberEncode(sentence) {
    let vowels = 'aeiou'.split('')
    let consonants = 'bcdfghjklmnpqrstvwxyz'.split('')

    let sentArr = sentence.split('')

    let newSent = []
    
    for (let i = 0; i < sentArr.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
            if (sentArr[i] === consonants[j]) {
                newSent.push(sentArr[i] + 'o' + sentArr[i])
            } else if (sentArr[i] === consonants[j].toUpperCase()) {
                newSent.push(sentArr[i] + 'O' + sentArr[i])
            } else if (sentArr[i] !== consonants[j] && sentArr[i] !== consonants[j].toUpperCase()){
                newSent.push(sentArr[i])
            }
        }
        for (let k = 0; k < vowels.length; k++) {
            if(sentArr[i] === vowels[k]) {
                newSent.push(sentArr[i])
            } else if (sentArr[i] === vowels[k].toUpperCase()) {
                newSent.push(sentArr[i])
            } else if (sentArr[i] !== vowels[k] && sentArr[i] !== vowels[k].toUpperCase()) {
                newSent.push(sentArr[i])
            }
        }
        // if (
        //     sentArr.some(letter => vowels.includes(letter)) === false && 
        //     sentArr.some(letter => 
        //         vowels.join('').toUpperCase().split('').includes(letter)) === false && 
        //     sentArr.some(letter => consonants.includes(letter)) === false &&
        //     sentArr.some(letter => 
        //         consonants.join('').toUpperCase().split('').includes(letter)) === false
        //     ) {
        //         newSent.push(sentArr[i])
        //     } else if (sentArr[i] === ' ') {
        //         newSent.push(sentArr[i])
        //     }        
    }
    return newSent.join('')
}

console.log(robberEncode("hello world"))
console.log(robberEncode("coding is fun"))
console.log(robberEncode("follow the white rabbit"))
console.log(robberEncode("S.O.S"))

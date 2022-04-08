// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let output = 1

    function mult(arr) {
        for (let i = 0; i < arr.length; i++) {
            return output *= arr[i]
        }
        return output
    }

    let intArr = String(num)
        .split('')
        .map(str => Number(str))

    if (intArr.length === 1) return 0

    while (intArr.length > 1) {
        mult(intArr)
        intArr = String(num)
            .split('')
            .map(str => Number(str))
        output = 1
    }
    
    // else {
    //     function mult(arr) {
    //         for (let i = 0; i < arr.length; i++) {
    //             return output *= arr[i]
    //         }
    //         return output
    //     }

    //     mult(firstArr)

    //     let secondArr = String(output)
    //         .split('')
    //         .map(str => Number(str))

    //     if (secondArr.length === 1) {
    //         output = 1
    //         return mult(secondArr)
    //     } else {
    //         output = 1
    //         mult(secondArr)

    //         let thirdArr = String(output)
    //             .split('')
    //             .map(str => Number(str))

    //         if(thirdArr.length === 1) {
    //             output = 1
    //             console.log(mult(thirdArr))
    //             return mult(thirdArr)
    //         } else {
    //             output = 1
    //             mult(thirdArr)

    //             let fourthArr = String(output)
    //             .split('')
    //             .map(str => Number(str))

    //             output = 1
    //             return mult(fourthArr)
    //         }
    //     }
    // }
}

persistence(39)
persistence(999)
persistence(4)
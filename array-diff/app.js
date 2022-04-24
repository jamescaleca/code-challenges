// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//my solution
function arrayDiff(a, b) {
    if (b.length === 0 || a.length === 0) a

    const numsToDelete = new Set(b)

    const newArr = a.filter(num => !numsToDelete.has(num))

    return newArr
}


console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], [2]))
console.log(arrayDiff([1,2,2], []))
console.log(arrayDiff([], [1,2]))
console.log(arrayDiff([1,2,3], [1,2]))

//another solution:
array_diff((a, b) => a.filter(e => !b.includes(e)))
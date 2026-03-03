const printArray = arr => {
    // TODO Task 1
    console.log(arr)
}

const reverseArray = arr => {
    // TODO Task 2
    let startPoint = arr.length
    for ( let i = arr.length-1, j = arr.length; i > -1; i--, j++) {
        arr[j] = arr[i]
        arr[i] = NaN
    }
    for (let i = 0, j = startPoint; j < arr.length; i++, j++) {
        arr[i] = arr[j]
    }
    arr.length = startPoint
}

const search = (arr, value) => {
    // TODO Task 3 return index of value, or -1 if not found
    for ( let i = 0; i <= arr.length-1; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19]
printArray(primes)  // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes)
printArray(primes) // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 13)
console.log(index) // 2
index = search(primes, 10)
console.log(index) // -1
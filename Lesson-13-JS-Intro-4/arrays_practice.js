const printArray = arr => {
    console.log('==========')
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log('==========')
}


const reverseArray = arr => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}


const search = (arr, value) => {
    // TODO Task 3 return index of value, or -1 if not found
    for (let i = 0; i < arr.length; i++) {
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

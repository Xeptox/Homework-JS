const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]
printArray(arr)
// selectionSort(arr)
// selectionSort(arr, (a, b) => b - a)
// shuffle
// selectionSort(arr, () => Math.random() - 0.5)
selectionSort(arr, (a, b) => (a - b))
printArray(arr)

function indexOfMin(arr, start, comparator) {
    let indexOfMinElement = start
    for ( let i = start + 1; i < arr.length; i++) {
        if (comparator(arr[i], arr[indexOfMinElement]) < 0 ) {
            indexOfMinElement = i
        }
    }
}

function selectionSort(arr, comparator = (a, b) => a - b) {
    // TODO implement selection sort algorithm
    for (let i = 0; i < arr.length - 1; i++) {
        const indexMinElement = indexOfMin(arr, i, comparator)
        if (indexMinElement !== i) {
            const temp = arr[i]
            arr[i] = arr[indexMinElement]
            arr[indexMinElement] = temp
        }
    }
}


function printArray(arr) {
    console.log('==========')
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log('==========')
}

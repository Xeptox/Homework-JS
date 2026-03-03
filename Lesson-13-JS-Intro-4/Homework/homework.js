const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]
printArray(arr)
// selectionSort(arr)
// selectionSort(arr, (a, b) => b - a)
// shuffle
selectionSort(arr, () => Math.random() - 0.5)
printArray(arr)


function selectionSort(arr, comparator = (a, b) => a - b) {
    // TODO implement selection sort algorithm
}


function printArray(arr) {
    console.log('==========')
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log('==========')
}

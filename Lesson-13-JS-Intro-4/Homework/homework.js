const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]
printArray(arr)
// selectionSort(arr)
// selectionSort(arr, (a, b) => b - a)
// shuffle
// selectionSort(arr, () => Math.random() - 0.5)
selectionSort(arr, (a, b) => (a > b))
printArray(arr)


function selectionSort(arr, comparator = (a, b) => a > b) {
    // TODO implement selection sort algorithm
    let minVar = arr[0]
    for ( let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (comparator(minVar, arr[j])) {
            minVar = arr[j]
        }
        if (comparator(minVar, arr[i])) {
            a

        }
    }
    }

    // for (let j = 0; j < arr.length-1; j++) {
    //     for (let i = 0; i < arr.length-1; i++) {
    //             if (comparator(arr[i], minVar) > 0) {
    //                 let tmpVar = arr[i]
    //                 arr[i] = arr[i + 1]
    //                 arr[i + 1] = tmpVar
    //             }
    //         }
    //     }
}


function printArray(arr) {
    console.log('==========')
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log('==========')
}

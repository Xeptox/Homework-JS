let arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]
printArray(arr)
bubbleSort(arr)
printArray(arr) // 0, 1, 1, 2, 2, 2, 4, 5, 9, 9


function bubbleSort(arr, comparator = (a, b) => a - b) {
    // TODO: Implement bubble sort algorithm
    // let varTmp = 0
    // for (let i = 0; i < arr.length ; i++) {
    //     for (let j = 0; j < arr.length ; j++){
    //         if (arr[i] < arr[j]) {
    //             varTmp = arr[i]
    //             arr[i] = arr[j]
    //             arr[j] = varTmp
    //         }
    //     }
    // }
    let varTmp = 0
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j ; i++){
            if (comparator(arr[i], arr[i + 1]) > 0) {
                varTmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = varTmp
            }
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
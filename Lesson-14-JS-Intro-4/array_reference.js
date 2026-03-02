let x = 10
console.log(`before call pow2Variable: x = ${x}`)
pow2Variable(x)
console.log(`after call pow2Variable: X = ${x}`)

let arr = [1,2,3]
console.log(`before call pow2Array: arr[1] = ${arr[1]}`)
pow2Array(arr)
console.log(`after call pow2Array: arr[1] = ${arr[1]}`)

function pow2Variable(x) {
    x = x * x
    console.log(`inside pow2Variable: x = ${x}`)

}

function pow2Array(arr) {
    arr[1] = arr[1] * arr[1]
    console.log(`inside pow2Array: arr[1] = ${arr[1]}`)
}
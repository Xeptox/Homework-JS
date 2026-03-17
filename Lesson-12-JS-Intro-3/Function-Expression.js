


const greeting = function (name) {
    return `Hello ${name}`

}

console.log(greeting('John'))
console.log(greeting)
const fn = greeting
console.log(fn('Peter'))
console.log(fn)
console.log(typeof fn)
console.log('=================='

)

function universalFunction(a, fn1, fn2) {
    if (a >= 0) {
        return fn1(a)
    } else {
        return fn2(a)
    }
}

function pow2(a) {
    return a * a
}

function factorial(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    return res
}

function pow3(a) { 
    res = 1
    for (let i = 1; i <= a; i++){
        res *= a
    }
    return res
}
console.log(factorial(5))
console.log(pow2(4))
console.log(pow3(2))
console.log(universalFunction(3, factorial, pow2))
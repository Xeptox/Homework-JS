// Homework: doesn't use const, let and setTimeout must call 10 times
// Problem -> console prints 10, 10 times
console.log('=== Original ===')

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 10)
}

// Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

//Async problem. Cycle "for" works independent of "console.log" because he is outside "setTimeout" function
// cycle "for" runs 10 times from i = 0 to i = 10 and then prints with "console.log" with time delays

setTimeout(  () => console.log('=== Solution ==='), 20)

setTimeout(function () {
    for (var j = 0; j <= 10; j++) {
        console.log(`j ${j}`)
    }
    }, 100)


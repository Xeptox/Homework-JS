let res = sumDigits(12345)
console.log(`sum digits of 12345 = ${res}`) // should print 15
res = luckyNumber(123871) //  1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky') // should print lucky
res = luckyNumber(124871) //  1 + 4 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky') // should print not lucky


function sumDigits(n) {
    // TODO returned sum of digits
    let summ = 0
    while (n > 0) {
        summ += n % 10
        n = (n / 10) - ((n % 10) / 10)

    }
    return summ
}

function luckyNumber(num) {
    // TODO returned true if num is lucky and false otherwise
    // lucky number if sum of odd position digits is equal to sum of even position digits
    numOrigin = num
    let i = 0
    while (num > 0) {
        num = (num / 10) - ((num % 10) / 10)
        i++
    }
    console.log(i)
    let divider = 10 ** (i-1)

    console.log(divider)
    let res = numOrigin % divider
    console.log(numOrigin)
    console.log(res)
}
let num = 12345
let res = sumDigits(num)
console.log(`Sum of digits from your number: ${num} is ${res}`) // should print 15
num = 123871
res = luckyNumber(num) //  1 + 3 + 7 === 2 + 8 + 1
console.log(res ? `Your number: ${num} is lucky` : `Your number: ${num} is not lucky`) // should print lucky
num = 124871
res = luckyNumber(num) //  1 + 4 + 7 === 2 + 8 + 1
console.log(res ? `Your number: ${num}  is lucky` : `Your number: ${num} is not lucky`) // should print not lucky
num = 124871457678693
res = luckyNumber(num)
console.log(res ? `Your number: ${num}  is lucky` : `Your number: ${num} is not lucky`) // should print not lucky

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
    let originNum = num
    let evenSum = 0
    let oddSum = 0
    let i = 0
    while (num > 0) {
        num = (num / 10) - ((num % 10) / 10)
        i++
    }
    let divider = 10 ** (i-1)
    while (originNum > 0) {
        oddSum = oddSum + ((originNum / divider)  - ((originNum % divider) / divider))
        originNum  = originNum % divider
        divider = divider / 10
        evenSum = evenSum + ((originNum / divider)  - ((originNum % divider) / divider))
        originNum  = originNum % divider
        divider = divider / 10
    }
    if (evenSum === oddSum) {
        return true
    }
}
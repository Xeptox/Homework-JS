let nickName = 'John'

const greeting = function () {
    let nickName = 'Mary'
    return function () {
        let nickName = 'Peter'
        console.log(`Hello ${nickName}`)
    }
}

nickName = 'Jane'
const hello = greeting()
hello()
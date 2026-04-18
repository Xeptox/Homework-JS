class User {
    constructor(nickName) {
        this.nickName = nickName;
    }

    infoFunc = function () {
        console.log(`Nickname: ${this.nickName}`)
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`)
    }
}

const peter = new User('Peter')
console.log('=== Func ===')
peter.infoFunc()
console.log('=== Arrow ===')
peter.infoArrow()
console.log('=== Context Loss ===')
const fn = peter.infoFunc.bind(peter)
// console.log(fn)
fn()
func(peter.infoFunc.bind({nickName: 'John'})) // callback = peter.infoFunc
// const mary = new User('Mary')


function func(callback) {
    // console.log(callback)
    callback()
}
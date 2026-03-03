const f4 = () => {
    console.log('f4 started')
    console.log('f4 ended')
}

const f3 = () => {
    console.log('f3 started')
    f4()
    console.log('f3 ended')
}

const f2 = () => {
    console.log('f2 started')
    f3()
    console.log('f2 ended')
}

const main = () => {
    console.log('main started')
    f2()
    console.log('main ended')
}

main()
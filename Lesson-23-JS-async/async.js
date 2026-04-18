console.log('One')
setTimeout(() => console.log('Two'), 10)
setTimeout(() => {
    console.log('Two 1/2')
    setTimeout(() => console.log('Two 3/4'), 5)
}, 1)

console.log('Three')
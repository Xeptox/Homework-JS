const wilWeGetAnswer = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isEddAngry = Math.random() < 0.5;
            if (isEddAngry) {
                const ignore = new Error(';)')
                reject(ignore)
            } else {
                const answer = {
                    code: 'Good Luck!',
                    smile: ':)'
                }
                resolve(answer)
            }
        }, 1000)
    })
}

wilWeGetAnswer()
    .then(res => res.code)
    .then(code => {
        console.log(code)
        return wilWeGetAnswer()
    })
    .then(res => res.code)
    .then(code => {
        console.log(code)
        return wilWeGetAnswer()
    })
    .then(res => res.code)
    .then(code => console.log(code))
    .catch(err => console.log(err))
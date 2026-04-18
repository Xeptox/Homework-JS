queryDatabase({userId: 123456789}, (err, user) => {
    if (err) {
        console.log(err)
    } else {
        const avatarHash = user.avatar.hash
        getImageByUrl(`photohosting.com/?q=${avatarHash}`, (err, image) => {
            if (err) {
                console.log(err)
            } else {
                transformImage(image, (err, transformedImage) => {
                    if (err) {
                        console.log(err)
                    } else {
                        sendEmail({to: user.email, image: transformedImage}, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                logTask({message: 'Email sent', result}, (err, result) => {
                                    // ...
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

// callback hell
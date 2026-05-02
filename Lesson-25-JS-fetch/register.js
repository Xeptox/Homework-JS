register.onclick = async () => {
    const user = {
        "firstName": firstName.value.trim(),
        "lastName": lastName.value.trim(),
        "login": login.value.trim(),
        "password": password.value

    }
    try {
        const response = await fetch('https://webaccounting.herokuapp.com/account/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
    } catch (e) {
        console.log(e)
    }
}

//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(e => console.log(e))
// }
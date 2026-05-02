register.onclick = async () => {
    try{
        const res = await fetch('https://webaccounting.herokuapp.com/account/login', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${btoa(`${login.value}:${password.value`)}`
            }
        })
        const body
    } catch(e){
        console.log(e);
    }
}
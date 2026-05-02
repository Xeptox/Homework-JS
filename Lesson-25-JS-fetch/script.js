
getPost.onclick = () => {
    fetch( `https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then(response => {
            // console.log(response.status);
            // console.log(response.ok);
            // console.log(response.headers.get('Content-Type'));
            return response.json();
        })
        .then(data => {
            //console.log(data);
            const h1 = document.createElement('h1')

            h1.append(`ID: ${data.id}, title: ${data.title}`);
            document.body.append(h1)
        })
        .catch(e => {
            const h1 = document.createElement('h1')
            h1.append(`${e.message}`)
            document.body.append(h1)
        });
}

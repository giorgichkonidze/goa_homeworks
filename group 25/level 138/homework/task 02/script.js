fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
        'Type': 'application/json'
    },
    body: JSON.stringify({
        title: "პირველი პოსტი",
        body: "hello world",
        userId: 1

    })
})
    .then(serponse => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error =>console.error(error))
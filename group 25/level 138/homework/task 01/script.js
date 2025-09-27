fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(`user:${user.name}, email: ${user.email}`)
        });
    })
    .catch(error => console.error(error)
    )
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
])
.then(([users, posts])=> {
    users.forEach(user => {
        const firtspost = posts.find(posts.userId === user.id)
        console.log(`${user.name}`)
        if(firtspost) {
            console.log(`${firtspost.title}`)
        } else {
            console.log('პოსტი ვერ მოიძებნა')
        }
        console.log('-----')
    })
})
.catch(error => console.error(error))
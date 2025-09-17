const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.slice(0,3).forEach(post => {
            console.log(`${post.title}`)
        });
    })
    .catch(err => console.log(err))
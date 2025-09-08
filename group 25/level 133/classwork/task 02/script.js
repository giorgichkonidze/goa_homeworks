const dataFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data fetched')
    }, 1000)
})
dataFetch.then(data => console.log(data))
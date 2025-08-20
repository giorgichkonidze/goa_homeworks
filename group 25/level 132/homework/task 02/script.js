const promise = new Promise((resolve, reject) => {
    reject('something went wrong')
})
promise
    .catch(error => console.log(error))
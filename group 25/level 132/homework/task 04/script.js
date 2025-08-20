const promise = new Promise((resolve, reject) => {
    const isSucess = Math.random() > 0.5
    if (isSucess) {
        resolve('success!')
    } else {
        reject('failed!')
    }
})
promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
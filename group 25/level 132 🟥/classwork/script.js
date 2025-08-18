let promise = new Promise((resolve, reject) => {
    let isBookAvaiable = false

    if (isBookAvaiable) {
        resolve('this is chocolate')
    } else {
        reject('i am sorry Bro, i didnt have time to buy chocolate')
    }
})
promise 
    .then(res => console.log('succes: ', res))
    .catch(err => console.log('failed:', err))
    .finally('Finally')
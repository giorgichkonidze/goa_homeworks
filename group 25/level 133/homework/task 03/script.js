function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`waited ${ms} ms`), ms)
    })
}
delay(1000).then(result => console.log('3:', result))
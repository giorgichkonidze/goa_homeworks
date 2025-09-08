function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
wait(1000).then(() => console.log("waitin 1s"))
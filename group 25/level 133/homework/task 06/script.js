function fetchuser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`user ${id} DATA`), 1500)
    })
}
fetchuser(42)
    .then(console.log)
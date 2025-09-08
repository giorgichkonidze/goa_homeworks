const random = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("succes"): reject("failure")
})
random
    .then(console.log)
    .then(console.error)
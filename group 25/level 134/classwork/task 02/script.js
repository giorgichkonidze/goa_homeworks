const fast = new Promise((resolve) => setTimeout(() => resolve("fastest fastBoy"), 100))
const slowly = new Promise((resolve) => setTimeout(() => resolve("slowly boy"), 500))

Promise.race([fast, slowly])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })
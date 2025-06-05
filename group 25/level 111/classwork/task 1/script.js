const greetUser = (name = "user") => {
    if (name === "") {
        name = "user"
    }

    return `Hello, ${name}`
}

console.log(greetUser())
console.log(greetUser("master Janeza"))
console.log(greetUser(""))

const mixedDate ={
    name: "Gio",
    age: 15,
    score: 40,
    active: false,
    member: true
}
for (let key in mixedDate) {
    if (typeof mixedDate[key] === "number") {
        console.log(`${key}: ${mixedDate[key]}`)
    }
}
const person = {
    name: "Andria",
    age: 10,
    job: "Sportsman"
}
const skills = ["Football", "MMA", "Baseball"]
// for in
// print - name age job
for (let key in person) {
    // console.log(key)
}

// for of
// print - Football MMA Baseball
for (let skill of skills) {
    // console.log(skill)
}
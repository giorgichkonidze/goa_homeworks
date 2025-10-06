const jsonStr = `
[
    {"id": 1, "status": "pending"},
    {"id": 2, "status": "complete"},
    {"id": 3, "status": "pending"}

]
`
let data = JSON.parse(jsonStr)
data.forEach(item => {
    if(item.status === "pending") {
        item.status = "complete"
    }
})
const updateJson = JSON.stringify(data, null, 4)
console.log(updateJson)
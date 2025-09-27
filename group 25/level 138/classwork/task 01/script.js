let user = `[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
]`

fetch('https://jsonplaceholder.typicode.com/todos/1 ')
    .then(responsive => Response.json())
    .then(json => console.log(json))

const apiFetch = async() => {
    const API_ENDPINT = fetch('https://jsonplaceholder.typicode.com/todos/1 ')
    const API_Data = API_ENDPINT.then(response => response.json())
    const response = API_Data.then(json => json)
    console.log(await response)
}
apiFetch()
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        const complateTodo = todos.filter(todo => todo.complated)
        complateTodo.forEach(todo => {
            console.log(`${todo.title}`)
        })
    })
    .catch(error => console.error(error))
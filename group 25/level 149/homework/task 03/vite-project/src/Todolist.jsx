function Todolist({ todos }) {
    return (
        <ul>
            {todos.map((todo, index)=> (
                <li key={index}>{todos}</li>
            ))}
        </ul>
    )
}
export default Todolist
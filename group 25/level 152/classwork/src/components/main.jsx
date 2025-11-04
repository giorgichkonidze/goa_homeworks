import "./Main.css"
export default function Main() {
    const fruits = ["banana", "apple", "orange", "karalioki", "mskali", "alubali", "mdogvi"]
    return (
        <div>
            <ul>
                {fruits.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
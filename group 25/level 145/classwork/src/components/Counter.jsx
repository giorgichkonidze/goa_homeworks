import { useState } from "react"
import "./counter.css"
export default function Counter() {
    const [count, setCount] = useState(0)

    const handlelncrease = () => {
        setCount(count + 1)
        console.log("increase", count)
    }
    const handleDecrease = () => {
        setCount(count - 1)
        console.log("decrease", count)
    }
    const handleDivided = () => {
        setCount(count / 2)
        console.log("decrease", count)
    }
    return (
        <div>
            <button>{count}</button>
            <button onClick={handlelncrease}></button>
            <button onClick={handleDecrease}></button>
            <button onClick={handleDivided}></button>
        </div>
    )
}
import "./Contacts.css";
import { useState, useEffect } from "react"
export default function contact() {
    const [click, setClick] = useState(0)
    useEffect(() => {
        setClick(5)
    }, [])
    const handleIncrement =() =>{
        setClick(click + 1)
    }
    return (
        <div>
            <h1>contact</h1>
            <p>damekontacte brat</p>
        </div>
    )
}
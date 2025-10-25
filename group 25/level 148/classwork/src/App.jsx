import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      name: "Nika",
    },
    {
      name: "Luka",
    },
    {
      name: "Davit",
    },
    {
      name: "Giorgi",
    },
    {
      name: "gela",
    },
    {
      name: "azerbaijan",
    },
  ];
   return (
    <div>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App

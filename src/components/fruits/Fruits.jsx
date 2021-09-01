import {useState} from "react";
import "./style.css"

const arrFruits = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
]

const Fruits = () => {
    
    const [fruits, setFruits] = useState(arrFruits)
    
    const redFruits = () =>{
        return setFruits(arrFruits.filter((item) => item.color === "red"))
    }
    return(
        <div>
            
            <ul>
                {fruits.map((item) => <li>{item.name}</li>)}
            </ul>

            <button onClick={redFruits} className="buttonFruits">
                Mostrar frutas vermelhas
            </button>

        </div>
    )
}


export default Fruits
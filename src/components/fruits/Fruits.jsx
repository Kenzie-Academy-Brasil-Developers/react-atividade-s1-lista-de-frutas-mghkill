import { useState } from "react";
import "./style.css";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const redFruits = () => {
    return setFruits(fruits.filter((item) => item.color === "red"));
  };
  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <button onClick={redFruits} className="buttonFruits">
        Mostrar frutas vermelhas
      </button>
    </div>
  );
};

export default Fruits;

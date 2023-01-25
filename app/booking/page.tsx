"use client"

import {useState} from "react"

const Booking = () => {

    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([])


const vacations = [
    {
    id: 1,
    city: "copenhagen",
    price: 230
    },
    {
        id: 2,
    city: "Sofia",
    price: 100
    },
    {
        id: 3,
            city: "Bucharest",
            price: 50
            },

]


const addToCart = () => {
  console.log(cart)
}

const Increment = () => {
  setCount(count => count + 1)
  setCart((a) => [...a, {city: count}])
}

const Decrement = () => {
    setCount(count => count - 1)
  }
  

  return (
    <div className="container">
    {vacations.map((city)=> {
        return <div key={city.city}>
            <div>{city.city}</div>
            <div>{city.price}</div>
            <button onClick={Increment}>+</button><div>Seats{count}</div><button onClick={Decrement}>-</button>
            </div>
    })}
    <button onClick={addToCart}>Submit</button>
    </div>
  );
};

export default Booking;
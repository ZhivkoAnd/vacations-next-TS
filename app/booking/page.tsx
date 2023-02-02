"use client";
import { useState } from "react";
import Basket from '../components/ui/Basket'
import {bookings} from '../components/utils/BookingsData'

const Booking = () => {
  const [cartItems, setCartItems] = useState([]);

  interface Product {
    id: number;
    title: string;
    price: number;
    image?: string;
    qty?: number;
  }

  const add = (product: Product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const remove = (product: Product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty > 0 ? exist.qty - 1 : exist.qty = 0 } : x
        ).filter((e)=>e.qty > 0)
      );
    } else {
      setCartItems([...cartItems]);
    }
  };

  const cityQuantity = (id: number) => {
    const quantity = cartItems.find((e) => e.id === id);
    if (quantity) {
      return quantity.qty;
    }
  };

  console.log(cartItems)

  return (
    <div className="container">
      <div className="vacation-panels">
        {bookings.map((city) => {
          return (
            <div className="vacation-panel" key={city.title}>
              <img
                src={city.image}
                className="vacation-panel__image"
                alt="city thumbnail"
              />
              <h2 className="vacation-panel__title"> {city.title}</h2>
              <h2 className="vacation-panel__title"> Price: ${city.price}</h2>
              <div className="vacation-panel__shop">
              <button onClick={() => remove(city)}>-</button>
              <div>{cityQuantity(city.id) > 0 ? cityQuantity(city.id) : "0"}</div>
              <button onClick={() => add(city)}>+</button>
              </div>
              {cityQuantity(city.id) > 0 ? <div className="vacation-panel__shop-total"> Total: ${cityQuantity(city.id) * city.price}</div> : ""}
            </div>
          );
        })}
      </div>
      <div>Your Basket</div>
      <div>
        {!cartItems.length ? (
          <div>Basket is empty</div>
        ) : (
          <div>
            <Basket cartItems = {cartItems}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

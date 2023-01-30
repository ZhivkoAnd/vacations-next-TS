"use client";
import { equal } from "assert";
import { useState } from "react";

const Booking = () => {
  const [cartItems, setCartItems] = useState([]);

  interface Product {
    id: number;
    title: string;
    price: number;
    image?: string;
    qty?: number;
  }

  const vacations = [
    {
      id: 1,
      title: "Copenhagen",
      price: 230,
      image:
        "https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/article_teaser/public/2019-03/Nyhavn%20K%C3%B8benhavn_43397.jpg?h=266c594a&itok=1ucaad7M",
    },
    {
      id: 2,
      title: "Sofia",
      price: 100,
      image:
        "https://theweekendfox.com/wp-content/uploads/2021/07/Bulgaria-Post-1-Cathedral-3.jpg",
    },
    {
      id: 3,
      title: "Bucharest",
      price: 50,
      image:
        "https://static01.nyt.com/images/2018/11/18/travel/18Hours-Bucharest1/18Hours-Bucharest1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
    },
  ];

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
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const lol = (id: any) => {
    const price = cartItems.find((e) => e.id === id);
    if (price) {
      return price.qty;
    }
  };

  return (
    <div className="container">
      <div className="vacation-panels">
        {vacations.map((city) => {
          return (
            <div className="vacation-panel" key={city.title}>
              <img
                src={city.image}
                className="vacation-panel__image"
                alt="city thumbnail"
              />
              <h2 className="vacation-panel__title"> {city.title}</h2>
              <h2 className="vacation-panel__title"> ${city.price}</h2>
              <button onClick={() => add(city)}>+</button>
              <div>{lol(city.id)}</div>
              <button onClick={() => remove(city)}>-</button>
            </div>
          );
        })}
      </div>
      <div>Basket</div>
      <div>
        {!cartItems.length ? (
          <div>Empty</div>
        ) : (
          <div>
            {cartItems.map((e) => {
              return (
                <div key={e.id}>
                  {e.title}...
                  {e.price * e.qty}...
                  {e.qty}...
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

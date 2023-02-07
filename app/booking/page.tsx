"use client";
import { useState } from "react";
import Basket from "../components/ui/Basket";
import { bookings } from "../components/utils/BookingsData";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Booking = () => {
  const [cartItems, setCartItems] = useState([]);

  interface BookingProps {
    id: number;
    title: string;
    price: number;
    image?: string;
    qty?: number;
  }

  const add = (clickedBooking: BookingProps) => {
    // Finds the item with the same id as the item we clicked
    const existingBooking = cartItems.find(
      (booking) => booking.id === clickedBooking.id
    );
    if (existingBooking) {
      // I map through the CartItems, and if the booking id is the same as clicked booking id, we return the same item but with increased quantity by 1,
      // and if the id is not the same, we return the item without any changes.
      setCartItems(
        cartItems.map((booking) =>
          booking.id === clickedBooking.id
            ? { ...existingBooking, qty: existingBooking.qty + 1 }
            : booking
        )
      );
      //  If the item doesn't exist yet, we add it to the existing array with a qty of 1
    } else {
      setCartItems([...cartItems, { ...clickedBooking, qty: 1 }]);
    }
  };

  // prettier-ignore
  const remove = (clickedBooking: BookingProps) => {
      const existingBooking = cartItems.find((x) => x.id === clickedBooking.id);
      if (existingBooking) {
         // I map through the CartItems, and if the booking id is the same as clicked booking id, we return the same item but decrease the qty by 1
         // I also check if the qty of that item is more than 1, because we don't want to go negative qty.
         // If the item id is not the same as the clicked item, we return the same item
         // Finally, I filter through the map items and return only with those with qty, as I dont want empty items in the array
        setCartItems(cartItems
            .map((booking) => booking.id === clickedBooking.id ? { ...existingBooking, qty: existingBooking.qty > 0 ? existingBooking.qty - 1 : (existingBooking.qty = 0), }: booking)
            .filter((item) => item.qty > 0)
        );
      } else {
        setCartItems([...cartItems]);
      }
    };

  // This will display the quantity of the specified item from the shopping cart
  const cityQuantity = (clickedBooking: number) => {
    const quantity = cartItems.find((booking) => booking.id === clickedBooking);
    if (quantity) {
      return quantity.qty;
    }
  };

  const totalQuantity = cartItems.reduce((a: any, b: any) => a + b.qty, 0);

  const removeItem = (clickedBooking: any) => {
    setCartItems(cartItems.filter((e) => e.id !== clickedBooking.id));
  };

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
                <div>
                  {cityQuantity(city.id) > 0 ? cityQuantity(city.id) : "0"}
                </div>
                <button onClick={() => add(city)}>+</button>
              </div>
              {cityQuantity(city.id) > 0 ? (
                <div className="vacation-panel__shop-total">
                  Total: ${cityQuantity(city.id) * city.price}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <ShoppingCartIcon/> {totalQuantity}
      <div>
        {!cartItems.length ? (
          <div>Basket is empty</div>
        ) : (
          <div>
            <Basket
              cartItems={cartItems}
              removeItem={removeItem}
              add={add}
              remove={remove}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

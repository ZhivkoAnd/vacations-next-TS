import React from "react";

const Basket = (props: any) => {
  let totalPrice = 0;

  props.cartItems.forEach((item: any) => {
    totalPrice += item.price * item.qty;
  });

  return (
    <div>
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th scope="col">Vacation</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems?.map((item: any) => {
            if (item.qty > 0) {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.title}</th>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="vacation-panel__shop-total-price">
        Total: ${totalPrice}{" "}
      </div>
    </div>
  );
};

export default Basket;

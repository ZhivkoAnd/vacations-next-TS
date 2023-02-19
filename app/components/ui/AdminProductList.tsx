import React from "react";
import { Product } from "../../types";

const AdminProductList = ({ data, remove }: any) => {
  return (
    <div>
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th scope="col">Vacation</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((city: any) => {
            return (
              <tr key={city.id}>
                <th scope="row">{city.title}</th>
                <td>
                  {city.price}
                  <button onClick={() => remove(city.id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;

import React from "react";

interface Product {
    city: {
      id: number;
      title: string;
      price: number;
      image?: string;
      qty?: number;
    };
  }

const AdminProductList = ({data} : any) => {
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
    {data?.cities.map((city: any) => {
        return (
          <tr key={city.id}>
            <th scope="row">
              {city.title}
            </th>
            <td>{city.price}</td>
          </tr>
        );
    })}
  </tbody>
</table>
</div>
  );
};

export default AdminProductList;

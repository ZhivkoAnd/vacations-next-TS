import React from "react";

const AdminProductList = ({ data }: any) => {
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
                <th scope="row">{city.title}</th>
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

import { bookings } from "../../app/components/utils/BookingsData";
import routes from "../../db.json";

export default function handler(request, response) {
  const fs = require("fs");

  const savedData = (as) => {
    const finished = (error) => {
      if (error) {
        console.log(error);
        return;
      }
    };
    const jsonData = JSON.stringify(as, null, 2);
    fs.writeFile("db.json", jsonData, finished);
  };

  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(routes);
  }

  if (method === "POST") {
    const { body } = request;

    routes.cities.push({ id: routes.cities.length + 1, ...body });
    savedData(routes);
    return response.status(200).json(routes);
  }
}

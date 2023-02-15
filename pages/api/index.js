import { bookings } from "../../app/components/utils/BookingsData";
import routes from "../../db.json";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(routes);
  }

  if (method === "POST") {
    const { body } = request;
    routes.cities.push({ ...body, id: routes.length + 1 });
    return response.status(200).json(routes);
  }
}

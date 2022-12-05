"use client";

import { createClient } from "contentful";
import { useQuery } from "@tanstack/react-query";

const fetchQuery = async () => {
  const client = createClient({
    space: "6yu8mnoa9wdc",
    accessToken: "qSxY7HTMgBYn3WQP4bL5svs27iUAQZEM-rauSvhvixg",
  });

  const responce = await client.getEntries({ content_type: "recipe" });
  return responce;
};

export const fetchVacationsClient = () => {
  return useQuery(["vacations"], fetchQuery);
};

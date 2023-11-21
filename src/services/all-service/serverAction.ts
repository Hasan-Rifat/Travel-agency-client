"use server";
import { revalidateTag } from "next/cache";

export const searchService = async (e: FormData) => {
  const location = e.get("location")?.toString();
  const name = e.get("name")?.toString();
  const category = e.get("category")?.toString();

  const data = {
    location,
    name,
    category,
  };

  await fetch("http://localhost:5000/api/v1/service/search", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (location || name || category) {
    console.log("search");
  }
  revalidateTag("service");
};

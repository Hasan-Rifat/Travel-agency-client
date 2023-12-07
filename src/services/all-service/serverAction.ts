"use server";
import { revalidateTag } from "next/cache";
import { getServiceIntoDb } from "./getServiceIntoDb";

export const searchService = async (e: FormData) => {
  const location = e.get("location")?.toString();
  const name = e.get("name")?.toString();
  const categoryId = e.get("category")?.toString();

  const data = {
    location,
    name,
    categoryId,
  };

  if (location || name || categoryId) {
    getServiceIntoDb(data as any);
    revalidateTag("service");
  }
};

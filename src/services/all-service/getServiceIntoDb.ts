"use server";

import { IService, response } from "@/types";

/* export async function getServiceIntoDb(payload?: {
  location: string;
  name: string;
  categoryId: string;
}) {
  const res = await fetch(
    `https://travel-agency-service-server-kappa.vercel.app/api/v1/service?location=${payload?.location}&categoryId=${payload?.categoryId}&name=${payload?.name}`,
    {
      cache: "no-cache",
      next: {
        tags: ["service"],
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data. Server response`);
  }

  const data = await res.json();

  return data;
} */
export async function getServiceIntoDb(query?: {
  location: string;
  name: string;
  categoryId: string;
}) {
  let url =
    "https://travel-agency-service-server-kappa.vercel.app/api/v1/service?";

  // Check if each parameter exists in the payload before adding it to the URL
  if (query?.location) {
    url += `location=${query?.location}&`;
  }
  if (query?.name) {
    url += `name=${query?.name}&`;
  }
  if (query?.categoryId) {
    url += `categoryId=${query?.categoryId}&`;
  }

  url = url.slice(0, -1); // Remove the trailing '&' from the URL

  const res = await fetch(url, {
    cache: "no-cache",
    next: {
      tags: ["service"],
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Server response`);
  }

  const data = await res.json();

  return data;
}

export const getServiceById = async (id: string): Promise<response> => {
  const res = await fetch(
    `https://travel-agency-service-server-kappa.vercel.app/api/v1/service/${id}`,
    {
      next: {
        tags: ["service"],
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Server response`);
  }

  const data = await res.json();

  return data;
};

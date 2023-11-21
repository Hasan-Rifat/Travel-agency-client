"use server";
export async function getServiceIntoDb() {
  const res = await fetch(`http://localhost:5000/api/v1/service`, {
    cache: "no-cache",
    next: {
      tags: ["service"],
    },
  });
  console.log(res);
  if (!res.ok) {
    throw new Error(`Failed to fetch data. Server response`);
  }

  const data = await res.json();

  return data;
}

export async function getData() {
  const res = await fetch("http://localhost:5000/api/v1/service");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

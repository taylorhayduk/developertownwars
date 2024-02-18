import { NextRequest } from "next/server";
import { fetchSwapiManufacturers } from "../swapi";

// TODO: Implement route to get all manufacturers
export async function GET(_req: NextRequest) {
  try {
    const manufacturers = await fetchSwapiManufacturers();

    return new Response(JSON.stringify(manufacturers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Return error response
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

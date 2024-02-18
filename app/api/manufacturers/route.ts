import { NextRequest } from "next/server";
import { Swapi } from "../swapi";

export async function GET(_req: NextRequest) {
  try {
    const manufacturers = await Swapi.fetchManufacturers();

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

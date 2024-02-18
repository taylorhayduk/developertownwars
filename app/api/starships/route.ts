import { NextRequest } from "next/server";
import { fetchSwapiStarships } from "../swapi";

export async function GET(_req: NextRequest) {
  try {
    const swapiStarships = await fetchSwapiStarships();
    return new Response(JSON.stringify(swapiStarships), {
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

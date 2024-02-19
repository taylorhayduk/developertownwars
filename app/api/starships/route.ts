import { NextRequest } from "next/server";
import { Swapi } from "../swapi";
import { URLSearchParams } from "url";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const searchParams = new URLSearchParams(url.search);
    const manufacturer = searchParams.get("manufacturer") as string;
    const swapiStarships = await Swapi.fetchStarships(manufacturer);
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

import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    const starships: any[] = [];

    let url = "https://swapi.dev/api/starships";
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      starships.push(...data.results);
      url = data.next;
    }

    return new Response(
      JSON.stringify({ starships, count: starships.length }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

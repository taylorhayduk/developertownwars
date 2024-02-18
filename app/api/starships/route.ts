import { NextRequest } from "next/server";

// TODO: Implement route to get all starships
export async function GET(req: NextRequest) {
  try {
    const starships: any[] = [{ name: "TODO: Get All Starships" }];

    return new Response(JSON.stringify(starships), {
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

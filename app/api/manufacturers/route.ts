import { NextRequest } from "next/server";

// TODO: Implement route to get all manufacturers
export async function GET(req: NextRequest) {
  try {
    const manufacturers: any[] = [{ name: "TODO: Get All Manufacturers" }];

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

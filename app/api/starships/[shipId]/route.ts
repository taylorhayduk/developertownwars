import { Swapi } from "../../swapi";

export async function GET(
  _req: Request,
  { params: { shipId } }: { params: { shipId: string } }
) {
  try {
    const swapiStarship = await Swapi.fetchStarship(shipId);
    return new Response(JSON.stringify(swapiStarship), {
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

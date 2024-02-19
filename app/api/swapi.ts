import { Starship } from "../types/starship";

export namespace Swapi {
  export async function fetchStarships(manufacturer?: string): Promise<{
    starships: Starship[];
    count: number;
  }> {
    const starships: Starship[] = [];
    let url = "https://swapi.dev/api/starships";
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      starships.push(...data.results);
      url = data.next;
    }

    if (manufacturer) {
      const filteredStarships = starships.filter((starship) =>
        starship.manufacturer.includes(manufacturer)
      );
      return {
        starships: filteredStarships,
        count: filteredStarships.length,
      };
    }

    return { starships, count: starships.length };
  }

  export async function fetchStarship(id: string): Promise<Starship> {
    console.log(`fetchting https://swapi.dev/api/starships/${id}`);
    const response = await fetch(`https://swapi.dev/api/starships/${id}`);
    return response.json();
  }

  export async function fetchManufacturers(): Promise<any[]> {
    const { starships } = await fetchStarships();

    const manufacturers: string[] = [];

    starships.forEach((starship) => {
      const starshipManufacturers = starship.manufacturer.split(/,(?!\s*Inc)/); // Don't split on "Inc" in the manufacturer name
      starshipManufacturers.forEach((m: string) => {
        const mName = m.trim();
        if (!manufacturers.includes(mName)) {
          manufacturers.push(mName);
        }
      });
    });

    return manufacturers.sort();
  }
}

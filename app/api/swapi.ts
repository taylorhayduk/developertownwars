export async function fetchSwapiStarships(): Promise<{
  starships: any[];
  count: number;
}> {
  const starships: any[] = [];
  let url = "https://swapi.dev/api/starships";
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    starships.push(...data.results);
    url = data.next;
  }
  return { starships, count: starships.length };
}

export async function fetchSwapiManufacturers(): Promise<any[]> {
  const { starships } = await fetchSwapiStarships();

  const manufacturers: string[] = [];

  starships.forEach((starship) => {
    const starshipManufacturers = starship.manufacturer.split(",");
    starshipManufacturers.forEach((m) => {
      const mName = m.trim();
      if (!manufacturers.includes(mName)) {
        manufacturers.push(mName);
      }
    });
  });

  return manufacturers;
}

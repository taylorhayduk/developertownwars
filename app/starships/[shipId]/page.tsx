"use server";

import { Swapi } from "@/app/api/swapi";
import Header from "@/app/components/Header/Header";
import { Starship } from "@/app/types/starship";
import Link from "next/link";

export default async function Page({
  params: { shipId },
}: {
  params: { shipId: string };
}) {
  const starship: Starship = await Swapi.fetchStarship(shipId);

  return (
    <div>
      <Header />
      <Link href="/starships">All Starships</Link>

      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Starship class: {starship.starship_class}</p>
    </div>
  );
}

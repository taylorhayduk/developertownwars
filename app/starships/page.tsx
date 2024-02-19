"use client";

import { useState, useEffect } from "react";
import { logout } from "@/app/api/auth";
import { Starship } from "../types/starship";
import Link from "next/link";

export default function Page() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch(`/api/manufacturers`);
        const data = await response.json();
        setManufacturers(data);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };

    fetchManufacturers();
  }, []);

  useEffect(() => {
    setStarships([]);
    const fetchStarships = async () => {
      try {
        const response = await fetch(
          `/api/starships?manufacturer=${selectedManufacturer}`
        );
        const data = await response.json();
        setStarships(data.starships);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };

    fetchStarships();
  }, [selectedManufacturer]);

  return (
    <div>
      <button
        onClick={async () => {
          await logout();
          location.reload();
        }}
      >
        Logout
      </button>
      <select
        value={selectedManufacturer}
        onChange={(e) => setSelectedManufacturer(e.target.value)}
      >
        <option value="">Select a manufacturer</option>
        {manufacturers?.map((manufacturer) => (
          <option key={manufacturer}>{manufacturer}</option>
        ))}
      </select>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
          {starships?.map((starship) => {
            const parts = starship.url.split("/"); // Splits the URL into parts
            const id = parts.pop() || parts.pop(); // Grabs the last part of the URL

            return (
              <tr key={starship.name}>
                <td>
                  <Link href={`/starships/${id}`}>{starship.name}</Link>
                </td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

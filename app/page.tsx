"use client";

import Link from "next/link";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import style from "./page.module.css";

export default function Page() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Link href="/starships">
          <Button>Starships</Button>
        </Link>
        <Link href="/starships">
          <Button>Placeholder</Button>
        </Link>
        <Link href="/starships">
          <Button>Placeholder</Button>
        </Link>
      </div>
    </div>
  );
}

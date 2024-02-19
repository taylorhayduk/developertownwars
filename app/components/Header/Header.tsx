"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { logout } from "@/app/api/auth";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/dtLogo.png"
          alt="DeveloperTown Logo"
          className={styles.logo}
          width={200}
          height={40}
        />
      </Link>
      <Button
        onClick={async () => {
          await logout();
          location.reload();
        }}
      >
        Log Out
      </Button>
    </header>
  );
};

export default Header;

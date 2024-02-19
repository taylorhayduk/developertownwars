"use client";

import { authenticate } from "@/app/api/auth";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";

export default function Page() {
  const [authenticateResponse, formAction] = useFormState(
    authenticate,
    undefined
  );

  if (authenticateResponse === "Success") {
    redirect("/starships");
  }

  return (
    <div className={styles.container}>
      <Image
        src="/dtLogo.png"
        alt="DeveloperTown Logo"
        className={styles.logo}
        width={200}
        height={40}
      />
      <form action={formAction} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <LoginButton />
        <div className={styles.response}>
          {authenticateResponse && <p>{authenticateResponse}</p>}
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  const status = useFormStatus();

  return (
    <Button aria-disabled={status.pending} type="submit">
      Login
    </Button>
  );
}

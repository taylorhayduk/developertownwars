"use client";

import { authenticate } from "@/app/api/actions";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";

export default function Page() {
  const [authenticateResponse, formAction] = useFormState(
    authenticate,
    undefined
  );

  if (authenticateResponse === "Success") {
    redirect("/starships");
  }

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{authenticateResponse && <p>{authenticateResponse}</p>}</div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const status = useFormStatus();

  return (
    <button aria-disabled={status.pending} type="submit">
      Login
    </button>
  );
}

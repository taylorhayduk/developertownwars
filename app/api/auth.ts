"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const exampleUserCreds = {
  email: "admin@developertown.com",
  password: "admin",
};

const secretKey = "secret"; // Replace with env variable
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7 days from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

async function logIn(formData: FormData) {
  if (
    formData.get("email") === exampleUserCreds.email &&
    formData.get("password") === exampleUserCreds.password
  ) {
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 * 7); // One week
    const session = await encrypt({
      email: exampleUserCreds.email,
      expires: expires,
    });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
    return;
  } else {
    throw new Error("CredentialsSignin");
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function authenticate(_prevState: any, formData: FormData) {
  try {
    await logIn(formData);
    return "Success";
  } catch (error: any) {
    if (error) {
      switch (error.message) {
        case "CredentialsSignin":
          return `Invalid credentials. Hey DeveloperTown friends! The username should be "${exampleUserCreds.email}" with password "${exampleUserCreds.password}"`;
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

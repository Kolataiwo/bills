"use server"
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  redirect("/auth/signin")
  return (
    <main>
      <p>home page</p>
    </main>
  );
}
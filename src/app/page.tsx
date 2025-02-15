"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4 ">
      {" "}
      <p className=" text-4xl animate-pulse duration-2500 drop-shadow-sm font-bold">
        TutorAI
      </p>{" "}
      <p className="text-xl">
        Create modern materials to enhance your learning process.
      </p>
      <Button variant="default" className="w-20 h-10">
        <Link className="text-xl" href="/create">
          Start
        </Link>
      </Button>
    </main>
  );
};

export default function Home() {
  return <Welcome />;
}

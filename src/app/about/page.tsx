"use client";

import { Header } from "@/components/Header";
import { Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
        <div className="w-full max-w-5xl items-center justify-between font-mono lg:flex">
          <Text>I am Michael</Text>
        </div>
      </main>
    </>
  );
}

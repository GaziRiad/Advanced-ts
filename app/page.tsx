"use client";

import Input from "@/components/Input";
import React, { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Your name:" type="text" ref={inputRef} />
    </main>
  );
}

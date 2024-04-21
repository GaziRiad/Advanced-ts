import Input from "@/components/Input";
import React from "react";

export default function page() {
  return (
    <main>
      <Input id="name" label="Your name:" type="text" />
      <Input id="age" label="Your age:" type="number" />
    </main>
  );
}

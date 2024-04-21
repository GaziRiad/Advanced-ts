"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Input";
import React from "react";

export default function page() {
  return (
    <main>
      <Input id="name" label="Your name:" type="text" />
      <Input id="age" label="Your age:" type="number" />
      <p>
        <Container
          as={Button}
          el="button"
          onClick={() => console.log("CLICKED!")}
        >
          Click Me
        </Container>
      </p>
    </main>
  );
}

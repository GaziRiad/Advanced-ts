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
        {/* <Button el="button">A Button</Button> */}
        <Container as={Button} />
        {/* <Button el="anchor" href="https://google.com" target="_blank">
          A Link
        </Button> */}
      </p>
    </main>
  );
}

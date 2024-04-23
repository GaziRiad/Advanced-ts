"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import React from "react";

export default function Home() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Full name" id="fullName" type="text" />
        <Input label="Age" id="age" type="number" />

        <Button el="button">Save</Button>
      </Form>
    </main>
  );
}

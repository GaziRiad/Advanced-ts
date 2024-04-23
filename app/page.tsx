"use client";

import Button from "@/components/Button";
import Form, { FormHandle } from "@/components/Form";
import Input from "@/components/Input";
import React, { useRef } from "react";

export default function Home() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input label="Full name" id="fullName" type="text" />
        <Input label="Age" id="age" type="number" />

        <Button el="button">Save</Button>
      </Form>
    </main>
  );
}

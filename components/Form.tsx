"use client";

import React, {
  type FormEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

export default function Form({ children, onSave, ...otherProps }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Never used this way before; from maximilian, and this a javascript mechanism to gather all form inputs into this data object!
    // For it to work, all the inputs must receive a NAME attribute!

    const formData = new FormData(e.currentTarget);
    // console.log(formData.get("fullName"));

    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}

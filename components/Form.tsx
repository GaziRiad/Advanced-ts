"use client";

import React, {
  type FormEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { children, onSave, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Never used this way before; from maximilian, and this a javascript mechanism to gather all form inputs into this data object!
    // For it to work, all the inputs must receive a NAME attribute!

    const formData = new FormData(e.currentTarget);
    // console.log(formData.get("fullName"));

    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;

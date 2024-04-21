"use client";

import React, { type ReactNode, type ComponentPropsWithoutRef } from "react";

export default function MyButton({ as = "button", onClick, children }) {
  if (as === "anchor") {
    return <a className="button">{children}</a>;
  }
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

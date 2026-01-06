"use client";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium shadow-sm";
  const styles = variant === "primary" ? `${base} bg-[#ffd400] text-black` : `${base} bg-transparent text-gray-700 border border-gray-200`;
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}

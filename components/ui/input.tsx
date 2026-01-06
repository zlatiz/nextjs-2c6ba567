"use client";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <label className="flex flex-col text-sm text-gray-700">
      {label ? <span className="mb-1">{label}</span> : null}
      <input className="px-3 py-2 border border-gray-200 rounded-md" {...rest} />
    </label>
  );
}

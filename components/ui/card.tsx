import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps): JSX.Element {
  return <div className="card">{children}</div>;
}

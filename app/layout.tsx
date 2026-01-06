import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export const metadata: { title: string; description: string } = {
  title: "Garber Bros, Inc.",
  description: "For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

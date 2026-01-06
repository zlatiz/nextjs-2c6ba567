import React from "react";
import Image from "next/image";

export default function Header(): JSX.Element {
  const logo = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logo);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/">
            <Image src={safeSrc} alt="Garber Bros logo" width={200} height={64} unoptimized className="block" />
          </a>
        </div>
        <nav className="header-nav text-sm text-gray-700">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/lock-status">Lock Status</a>
          <a href="/vessels">Vessels</a>
          <a href="/barges">Barges</a>
          <a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

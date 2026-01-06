import React from "react";
import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg",
  "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+",
  "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+",
  "https://garberbrosinc.com/%27/Images/Transparent.html"
];

export default function HomePage() {
  const heroImage = IMAGES[1] ?? IMAGES[0];
  const galleryFirstSix = Array.isArray(IMAGES) ? IMAGES.slice(0, 6) : [];
  const galleryRest = Array.isArray(IMAGES) ? IMAGES.slice(6) : [];

  return (
    <>
      <section className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <h1 className="text-3xl md:text-4xl font-bold text-brandText">Garber Bros, Inc.</h1>
          <p className="mt-4 text-gray-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6 flex gap-3 items-center">
            <a href="/vessels" className="inline-block">
              <Button variant="primary">View Our Fleet of Vessels</Button>
            </a>
            <a href="javascript:previousSlide6347994()" className="text-sm text-gray-600 underline">Prev</a>
            <a href="javascript:nextSlide6347994()" className="text-sm text-gray-600 underline">Next</a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            {typeof heroImage === "string" ? (
              (() => {
                const safeSrc = encodeURI(heroImage);
                return (
                  <Image src={safeSrc} alt="Hero - vessels" width={1200} height={675} unoptimized className="object-cover w-full h-full" />
                );
              })()
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-[4/3] mb-4 overflow-hidden rounded-md bg-gray-100 border border-gray-200">
              {(() => {
                const safeSrc = encodeURI("https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg");
                return <Image src={safeSrc} alt="Our Vessels" width={800} height={600} unoptimized className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="font-medium text-lg">Our Vessels</h3>
            <p className="text-gray-600 mt-2">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <div className="mt-4 flex gap-2">
              <a href="/vessels" className="text-sm text-primary underline">View Our Vessels »</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] mb-4 overflow-hidden rounded-md bg-gray-100 border border-gray-200">
              {(() => {
                const safeSrc = encodeURI("https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg");
                return <Image src={safeSrc} alt="Employment" width={800} height={600} unoptimized className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="font-medium text-lg">Employment</h3>
            <p className="text-gray-600 mt-2">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="mt-4 flex gap-2">
              <a href="/websites/garberbrosinc/images/application.pdf" className="text-sm text-primary underline">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-gray-600 underline">Apply Online</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] mb-4 overflow-hidden rounded-md bg-gray-100 border border-gray-200">
              {(() => {
                const safeSrc = encodeURI("https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg");
                return <Image src={safeSrc} alt="Contact Us" width={800} height={600} unoptimized className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="font-medium text-lg">Contact Us</h3>
            <p className="text-gray-600 mt-2">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <div className="mt-4">
              <a href="/contact" className="text-sm text-primary underline">Contact Garber Bros Inc »</a>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Array.isArray(galleryFirstSix)
            ? (Array.isArray(galleryFirstSix) ? galleryFirstSix : []).map((url, idx) => {
                const safeSrc = encodeURI(url);
                return (
                  <div key={idx} className="rounded-md overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3]">
                    <Image src={safeSrc} alt={`Gallery image ${idx + 1}`} width={400} height={300} unoptimized className="object-cover w-full h-full" />
                  </div>
                );
              })
            : null}
        </div>

        {Array.isArray(galleryRest) && galleryRest.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">More Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(Array.isArray(galleryRest) ? galleryRest : []).map((url, idx) => {
                const safeSrc = encodeURI(url);
                return (
                  <div key={idx} className="rounded-md overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3]">
                    <Image src={safeSrc} alt={`Gallery extra ${idx + 1}`} width={600} height={450} unoptimized className="object-cover w-full h-full" />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <nav className="flex flex-wrap gap-4 text-sm">
          <a href="/" className="text-gray-700 underline">Home</a>
          <a href="/about" className="text-gray-700 underline">About Us</a>
          <a href="/lock-status" className="text-gray-700 underline">Lock Status</a>
          <a href="/vessels" className="text-gray-700 underline">Vessels</a>
          <a href="/barges" className="text-gray-700 underline">Barges</a>
          <a href="/websites/garberbrosinc/images/application.pdf" className="text-gray-700 underline">Employment</a>
          <a href="/contact" className="text-gray-700 underline">Contact Us</a>
          <a href="contact.aspx" className="text-gray-700 underline">contact.aspx</a>
          <a href="/transparency-in-coverage" className="text-gray-700 underline">Transparency in Coverage</a>
          <a href="#" className="text-gray-700 underline">Back to Top</a>
        </nav>
      </section>
    </>
  );
}

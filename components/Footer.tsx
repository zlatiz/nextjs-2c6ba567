import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© Copyright 2015 by <span className="font-medium">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="flex gap-4 items-center mt-3 md:mt-0 text-sm">
          <a href="/transparency-in-coverage" className="text-gray-600">Transparency in Coverage</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-gray-600">Apply via GoodHiring</a>
          <a href="contact.aspx" className="text-gray-600">contact.aspx</a>
          <a href="#" className="text-gray-600">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

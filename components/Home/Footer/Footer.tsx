import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f3f3f3] border-t border-gray-300 py-8 px-8 md:px-16 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Name or Logo */}
        <h2 className="text-2xl font-serif tracking-wide">
          Studio Rallia
        </h2>

        {/* Right side - Links or Copyright */}
        <div className="text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-right">
          <a href="#" className="hover:text-black transition">
            Instagram
          </a>
          <a href="#" className="hover:text-black transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-black transition">
            Behance
          </a>
          <p className="text-gray-500">© 2025 Studio Rallia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

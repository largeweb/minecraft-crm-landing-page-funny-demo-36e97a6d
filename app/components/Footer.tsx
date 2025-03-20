// app/components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 py-4 text-center text-white mt-8 font-bold">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Minecraft CRM (Not Really). All rights reserved.
      </p>
      <a
        href="#"
        className="text-blue-300 hover:text-blue-500 mt-2 block text-sm"
      >
        Terms of Service (Definitely Fictional)
      </a>
    </footer>
  );
};

return Footer;
import React from "react";

const Footer = () => {
const LOGO= "<Hp />"

  return (
    <footer className="footer mt-auto border  border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12  flex justify-between">
        <span>{LOGO}</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
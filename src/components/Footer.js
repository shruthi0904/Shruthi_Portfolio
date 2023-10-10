import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerSection">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center lg:py-2'>Build With <span className='text-primary dark:text-primaryDark text-2xl px1'>&#9825;</span> by&nbsp;Shruthi Palkrutwar</div>
      </div>
    </div>
  );
}

export default Footer;

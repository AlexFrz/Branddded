import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

function TheHeader() {
  return (
    <div className="theheader">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="menu-wrapper">
        <HamburgerMenu />
      </div>

      <style jsx>
        {`
          .theheader {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            height: 10vh;
            width: 100vw;
            justify-content: space-between;
          }

          .logo-wrapper {
            margin-left: 30px;
          }

          .menu-wrapper {
            margin-right: 30px;
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default TheHeader;

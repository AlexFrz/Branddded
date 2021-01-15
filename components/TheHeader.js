import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { device } from "../styles/device";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import Menu from "./Menu";

function TheHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="theheader">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="menu-wrapper">
        <HamburgerMenu open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <style jsx>
        {`
          .theheader {
            @media ${device.mobileS} {
              display: flex;
              justify-content: space-between;
              height: 10vh;
              width: 100vw;
              z-index: 999;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              display: flex;
              position: fixed;
              top: 0;
              left: 0;
              height: 10vh;
              width: 103vh;
              justify-content: space-between;
            }
            @media ${device.desktop} {
              font-size: 3em;
            }

            .logo-wrapper {
              @media ${device.mobileS} {
                margin-left: 20px;
              }
              @media ${device.tablet} {
              }
              @media ${device.laptop} {
                margin-left: 30px;
              }
              @media ${device.desktop} {
              }
            }

            .menu-wrapper {
              @media ${device.mobileS} {
              }
              @media ${device.tablet} {
                margin-right: 50px;
              }
              @media ${device.laptop} {
                margin-right: 30px;
                margin-top: 20px;
                cursor: pointer;
              }
              @media ${device.desktop} {
              }
            }
          }
        `}
      </style>
    </div>
  );
}

export default TheHeader;

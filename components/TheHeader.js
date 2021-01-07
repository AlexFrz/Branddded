import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { device } from "../styles/device";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";

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
          @import "../styles/breakpoints.global.css";

          .theheader {
            @media ${device.mobileS} {
              display: flex;
              justify-content: space-between;
              height: 10vh;
              width: 100vw;
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
            }

            .logo-wrapper {
              @media ${device.mobileS} {
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

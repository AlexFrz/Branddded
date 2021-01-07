import React from "react";
import { device } from "../styles/device";

function HamburgerMenu() {
  return (
    <div className="hamburgermenu">
      <button>
        <span></span>
        <span></span>
      </button>

      <style jsx>
        {`
          button {
            @media ${device.mobileS} {
              padding: 10px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              transform-origin: center;

              transform: rotate(90deg);
            }
            @media ${device.desktop} {
            }
            background: none;
            border: none;
          }

          button span {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
            }
            @media ${device.desktop} {
            }
            width: 36px;
            height: 8px;
            display: block;
            margin: 8px;
            background-color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default HamburgerMenu;

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
              padding: 30px;
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
              width: 70px;
              height: 15px;
              margin: 20px;
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

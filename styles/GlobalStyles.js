import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { device } from "./device";

const GlobalStyles = createGlobalStyle`
html {
        @media ${device.mobileS} {
          width: 100vw;
     
        }
        @media ${device.tablet} {
        }
        @media ${device.laptop} {
  
        }
        @media ${device.desktop} {}

        }
        body {
          @media ${device.mobileS} {
 
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
        

    
            }
            @media ${device.desktop} {
            }

            margin: 0;
            font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
            background-color: #E64445;
        }


        * {
          @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              box-sizing: border-box;
            }
            @media ${device.desktop} {}

        }

        a {
          text-decoration:none;
        }


        strong {
          color: #1e1e1e;
          font-weight: 600;
        }

        .section {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-big_text h1 {
          color: #E64445;
          -webkit-text-stroke: 2px #FAF8F2;
        }

        .--- {
          letter-spacing: -10px;
          font-weight: 900;
          @media ${device.desktop} {
            letter-spacing: -15px;
          }
        }
`;

export default GlobalStyles;

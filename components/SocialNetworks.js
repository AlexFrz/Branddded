import React from "react";
import { device } from "../styles/device";

import Image from "next/image";

export default function SocialNetworks() {
  return (
    <>
      <section className="socialnetworks">
        <div className="socialnetworks__bigtext">
          <div className="socialnetworks__bigtext-seemore">
            SEE MORE <div className="bigline"></div>
          </div>
          <div className="socialnetworks__bigtext-oursocial">ON OUR SOCIAL</div>
          <div className="socialnetworks__bigtext-networks">NETWORKS</div>
          <div className="little-text1">Twitter</div>
          <div className="little-text2">Instagram</div>
          <div className="little-text3">Behance</div>
          <div className="socialnetworks__bigtext-line1"></div>
          <div className="socialnetworks__bigtext-line2"></div>
          <div className="socialnetworks__bigtext-line3"></div>
          <div className="socialnetworks__bigtext-line4"></div>
          <div className="socialnetworks__bigtext-line5"></div>
        </div>

        <div className="socialnetworks__socialicons">
          <ul>
            <a target="_blank" href="https://www.instagram.com/imaleeph/">
              <li>
                <Image
                  src="/instagram.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/imaleeph/">
              <li>
                <Image
                  src="/twitter.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/imaleeph/">
              <li>
                <Image
                  src="/behance.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/imaleeph/">
              <li>
                <Image
                  src="/facebook.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </li>
            </a>
          </ul>
        </div>
      </section>
      <style jsx>
        {`
          .socialnetworks {
            @media ${device.mobileS} {
              height: 100vh;
              width: 100vw;
              left: 20px;
              top: 400vh;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              top: auto;
              left: 319vw;
              width: 90vw;
              height: 102vh;
            }
            @media ${device.desktop} {
            }
            position: absolute;
          }

          .socialnetworks__bigtext {
            @media ${device.mobileS} {
              font-size: 40px;
              line-height: 30px;
              margin-top: 30px;
              max-width: 100vw;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-top: auto;
              font-size: 100px;
              line-height: 75px;
              top: 130px;
              left: 150px;
            }
            @media ${device.desktop} {
            }
            position: relative;
            font-family: Futura;
            font-weight: bold;
          }

          .socialnetworks__bigtext-seemore {
            @media ${device.mobileS} {
              font-size: 20px;
              margin-bottom: -8px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              font-size: 40px;
              margin-bottom: -20px;
              margin-left: 4px;
            }
            @media ${device.desktop} {
            }
            position: relative;
            display: flex;
            align-items: center;
          }

          .bigline {
            @media ${device.mobileS} {
              height: 14px;
              width: 250px;
              margin-left: 0px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              height: 30px;
              width: 900px;
              margin-left: -2.5px;
            }
            @media ${device.desktop} {
            }
            background-color: #fffafa;
          }

          .socialnetworks__bigtext-oursocial {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: relative;
              top: -1px;
            }
            @media ${device.desktop} {
            }
            color: #1e1e1e;
          }

          .socialnetworks__bigtext-networks {
            @media ${device.mobileS} {
              font-size: 57px;
              margin-top: 9px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              font-size: 144px;
              margin-top: 15.5px;
            }
            @media ${device.desktop} {
            }
          }

          .socialnetworks__bigtext-line1 {
            @media ${device.mobileS} {
              height: 200px;
              width: 7.9px;
              margin-top: -350px;
              left: 145.5px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              height: 450px;
              width: 20px;
              margin-top: 0;
              left: 28.4vw;
              top: -600px;
            }
            @media ${device.desktop} {
            }
            position: relative;
            background-color: #1e1e1e;
          }
          .socialnetworks__bigtext-line2 {
            @media ${device.mobileS} {
              height: 350px;
              width: 8.2px;
              left: 77.5vw;
              height: 200px;
              margin-top: -200px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              height: 350px;
              width: 20px;
              margin-top: auto;
              top: -900px;
              left: 65.9vw;
            }
            @media ${device.desktop} {
            }
            position: relative;
            z-index: -1;
            background-color: #1e1e1e;
          }

          .socialnetworks__bigtext-line3 {
            @media ${device.mobileS} {
              position: relative;
              height: 400px;
              width: 10px;
              background-color: #fffafa;
              margin-top: 30px;
              left: 0.92vw;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: relative;
              height: 350px;
              width: 28px;
              margin-top: auto;
              background-color: #fffafa;
              top: -800px;
              left: 0.9vw;
            }
            @media ${device.desktop} {
            }
          }

          .socialnetworks__bigtext-line4 {
            @media ${device.mobileS} {
              position: absolute;
              height: 450px;
              width: 11px;
              background-color: #fffafa;
              top: 90px;

              left: 25vw;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              height: 450px;
              width: 28px;
              background-color: #fffafa;
              top: 200px;
              left: 18.57vw;
            }
            @media ${device.desktop} {
            }
          }

          .socialnetworks__bigtext-line5 {
            @media ${device.mobileS} {
              position: absolute;
              height: 450px;
              width: 11px;
              background-color: #fffafa;
              top: 90px;
              left: 63.6vw;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              height: 450px;
              width: 28px;
              background-color: #fffafa;
              top: 200px;
              left: 47.19vw;
            }
            @media ${device.desktop} {
            }
          }

          .little-text1 {
            @media ${device.mobileS} {
              opacity: 0;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              color: #fffafa;
              font-size: 20px;
              font-weight: 200;
              top: -4vh;
              left: 43vh;
            }
            @media ${device.desktop} {
            }
          }

          .little-text2 {
            @media ${device.mobileS} {
              opacity: 0;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              color: #fffafa;
              font-size: 20px;
              font-weight: 200;
              top: 20vh;
              left: -6.5vh;
              transform: rotate(-90deg);
            }
            @media ${device.desktop} {
            }
          }

          .little-text3 {
            @media ${device.mobileS} {
              opacity: 0;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              color: #fffafa;
              font-size: 20px;
              font-weight: 200;
              top: 30vh;
              left: 80.5vh;
              transform: rotate(-90deg);
            }
            @media ${device.desktop} {
            }
          }

          .socialnetworks__socialicons ul {
            @media ${device.mobileS} {
              top: 140px;
              margin-left: -30px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              top: 450px;
              margin-left: 320px;
              width: 900px;
            }
            @media ${device.desktop} {
            }
            display: flex;
            list-style: none;
            position: absolute;
          }

          .socialnetworks__socialicons ul li {
            @media ${device.mobileS} {
              padding: 10px;
              margin: 10px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              padding: 15px;

              margin: 22px;
            }
            @media ${device.desktop} {
            }
            border-radius: 100%;
            background: #1e1e1e;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { device } from "../styles/device";

export default function WeAreBranddded() {
  return (
    <>
      <div className="section one">
        <div className="hero-text-wrapper">
          <h1 className="weare">
            We are <span className="---">----</span> <br />
            <span className="Branddded">Branddded.</span>
          </h1>
          <h1 className="creative">
            A creative agency <br />
            of growth-driven designers.
          </h1>
          <a href="mailto:weare@branddded.com">
            <button className="free">
              BOOK A FREE MEETING
              <ArrowRightIcon fontSize="large" />
            </button>
          </a>
        </div>
      </div>
      <div className="section two">
        <div className="hero-big_text">
          <h1 className="skewElem">
            <span className="draw">draw</span>
            <br />
            <span className="design"> design</span>
            <br />
            <span className="develop">develop</span>
          </h1>
        </div>
      </div>

      <style jsx>{`
        .hero-text-wrapper {
          position: absolute;
          @media ${device.mobileS} {
            width: 80vw;
            top: 13vh;
          }
          @media ${device.tablet} {
            top: 10vh;
          }
          @media ${device.laptop} {
            left: 10vw;
            top: 15vh;
            width: 50vw;
          }
          @media ${device.desktop} {
            width: 60vw;
          }
        }

        .hero-text-wrapper h1 {
          font-weight: 700;

          @media ${device.mobileS} {
            font-size: 12vw;
            line-height: 1;
            letter-spacing: -1px;
          }
          @media ${device.tablet} {
            font-size: 7.5vw;
          }
          @media ${device.laptop} {
            font-size: 4.5vw;
            line-height: 1.1;
            letter-spacing: -1.5px;
          }
          @media ${device.desktop} {
            font-size: 5vw;
          }
        }

        .hero-text-wrapper button {
          @media ${device.mobileS} {
            width: 85vw;
            height: 8vh;
            font-size: 2.6vh;
            padding: 10px;
          }
          @media ${device.tablet} {
            width: 70vw;
            padding-left: 30px;
          }
          @media ${device.laptop} {
            width: auto;
            height: auto;
            padding: 20px 30px;
            font-size: 22px;
          }
          @media ${device.desktop} {
            width: 40vw;
            height: 10vh;
            font-size: 4vh;
            padding: 40px;
          }
          display: flex;
          background-color: #fffafa;
          border: none;
          color: rgba(230, 21, 22, 0.75);
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          align-items: center;
          cursor: pointer;
        }

        .skewElem {
          @media ${device.mobileS} {
            width: 100vw;
            height: 65vh;
            margin-top: 400px;

            padding-left: 30px;
          }
          @media ${device.tablet} {
            margin-top: 600px;
            height: 80vh;
          }
          @media ${device.laptop} {
            width: auto;
            height: auto;
            margin-top: 200px;
            padding-left: 10vw;
          }
        }

        .hero-big_text {
          font-family: ZonaBlack;
          @media ${device.mobileS} {
            position: absolute;
            margin-top: -250px;
            padding-top: 200px;
          }
          @media ${device.tablet} {
          }
          @media ${device.mobileS} {
            position: absolute;
            width: auto;
            overflow-x: visible;
            padding-top: auto;
          }
          @media ${device.desktop} {
            margin-left: -500px;
          }
        }

        .hero-big_text h1 {
          @media ${device.mobileS} {
            width: 100vw;
            overflow-x: hidden;
            padding-top: 20px;
            line-height: 90px;
            margin-left: -31px;
            font-size: 150px;
            top: -60vh;
            letter-spacing: -6px;
          }
          @media ${device.tablet} {
            padding-top: 30px;
            line-height: 120px;
            font-size: 230px;
          }
          @media ${device.laptop} {
            line-height: 170px;
            letter-spacing: -15px;
            overflow-x: visible;
            margin-left: 250px;
            padding-top: auto;
            left: -4vw;
            top: 0;
            position: relative;
            z-index: 999;
            text-shadow: -2px 1px 2px rgba(255, 255, 255, 0.82);
            font-size: calc(1em + 20vw);
            font-weight: 900;
          }
          @media ${device.desktop} {
            font-size: calc(10em + 20vw);
            line-height: 325px;
            letter-spacing: -35px;
          }
          position: relative;
          z-index: 999;
          text-shadow: -2px 1px 2px rgba(255, 255, 255, 0.82);
          font-size: calc(1em + 20vw);
          font-weight: 900;
        }

        .section .two {
          @media ${device.mobileS} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            left: 100vh;
          }
          @media ${device.desktop} {
          }
        }
      `}</style>
    </>
  );
}

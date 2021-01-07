import React from "react";
import { device } from "../styles/device";

export default function Typographies() {
  return (
    <>
      <div className="typographies">
        <div className="big-b">B</div>
        <div className="branddded">
          Bran<span className="triple-d">ddd</span>ed.
        </div>
        <div className="light">LIGHT</div>
        <div className="round"></div>
        <div className="square">
          <h1>
            Our <span className="---">----</span> <br />
            <span className="works">works.</span>
          </h1>
        </div>
      </div>

      <style jsx>
        {`
          .typographies {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              left: 180vw;
            }
            @media ${device.desktop} {
            }
            position: absolute;
          }
          .big-b {
            @media ${device.mobileS} {
              position: relative;
              font-size: 600px;
              width: 225px;
              overflow: hidden;
              top: 20px;
              right: -150px;
              z-index: -1;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              width: auto;
              position: absolute;
              margin-left: 850px;
              right: auto;
              top: -500px;
              font-size: 900px;
            }
            @media ${device.desktop} {
            }

            font-family: Futura;
            font-style: italic;
            color: #e64445;
          }

          .branddded {
            @media ${device.mobileS} {
              font-size: 100px;

              margin-top: -450px;
              margin-left: -190px;
              letter-spacing: -7px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-left: 500px;
              top: 200px;
              letter-spacing: -7px;
              font-size: 100px;

              margin-top: auto;
            }
            @media ${device.desktop} {
            }
            color: #fffafa;
            transform: rotate(-90deg);
            position: absolute;
            font-family: Futura;
          }

          .triple-d {
            color: #e64445;
          }

          .light {
            @media ${device.mobileS} {
              font-size: 25px;
              margin-top: -155px;
              margin-left: 5px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-left: 680px;
              font-size: 30px;
              top: 490px;
              margin-top: auto;
            }
            @media ${device.desktop} {
            }
            color: #fffafa;
            position: absolute;
          }

          .round {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              height: 125px;
              width: 125px;
              background-color: #e64445;
              border-radius: 100%;
              margin-left: 1200px;
              top: 550px;
            }
            @media ${device.desktop} {
            }
          }
          .square {
            @media ${device.mobileS} {
              height: 400px;
              width: 400px;
              margin-top: -130px;
              margin-left: -90px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              height: 70vh;
              width: 70vh;
              margin-top: auto;
              margin-left: 55vw;
              top: 70vh;
              font-size: 35px;
            }
            @media ${device.desktop} {
            }
            border-radius: 100%;
            background-color: #1e1e1e;
            position: absolute;
            justify-content: center;
            text-align: center;
          }

          .square h1 {
            @media ${device.mobileS} {
              font-size: 50px;
              line-height: 40px;
              text-align: left;
              margin-left: 120px;
              margin-top: 80px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-left: auto;
              position: absolute;
              margin-top: 90px;
              left: 100px;
              line-height: 45px;
              letter-spacing: -5px;
            }
            @media ${device.desktop} {
            }
          }
          .works {
            color: #fffafa;
          }
        `}
      </style>
    </>
  );
}

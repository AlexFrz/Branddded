import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { device } from "../styles/device";

function OurMission() {
  return (
    <>
      <div className="triangle">
        <h3 className="experiences">We design experiences</h3>
        <div className="redband">
          <h1>
            Our <span className="---">------</span> <br />
            <span className="missions">mission.</span>
          </h1>
        </div>
      </div>

      <div className="monogirl">
        <div className="goviral">GO VIRAL</div>
        <h1 className="bigideas">We give superpowers to your ideas.</h1>
        <div className="croped"></div>

        <ul className="missions-list">
          <div className="first-column">
            <li>
              <span className="bullet">I</span>Create your{" "}
              <strong>brand identity</strong>.
            </li>
            <li>
              <span className="bullet">I</span>Imagine <strong>UX</strong>{" "}
              they'll love to use.
            </li>
            <li>
              <span className="bullet">I</span>Develop responsive{" "}
              <strong>websites</strong>.
            </li>
            <li>
              <span className="bullet">I</span>Craft{" "}
              <strong>shopping experiences</strong>.
            </li>
          </div>
          <div className="second-column">
            <li>
              <span className="bullet">I</span>Take <strong>pictures</strong> of
              your products.
            </li>
            <li>
              <span className="bullet">I</span>Build{" "}
              <strong>social media</strong> presence.
            </li>
            <li>
              <span className="bullet">I</span>Optimize{" "}
              <strong>SEO and traffic</strong>.
            </li>
            <li>
              <span className="bullet">I</span>Implement{" "}
              <strong>growth hacking</strong> strategies that will make you go
              viral.
            </li>
          </div>
        </ul>
        <a href="mailto:weare@branddded.com">
          <button className="cta-call">
            CONTACT US <ArrowRightIcon fontSize="large" />
          </button>
        </a>
      </div>

      <style jsx>{`
        .triangle {
          @media ${device.mobileS} {
            width: 102vw;
            height: 250vh;
            top: 130vh;
            left: 0;
            clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0% 100%);
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            top: 0;
            left: 100vw;
            height: 101vh;
            width: 200vw;
            clip-path: polygon(11% 0, 100% 0%, 100% 100%, 22% 100%);
          }
          @media ${device.desktop} {
          }
          z-index: -1;
          position: absolute;
          background: #fffafa;
        }

        .degrade {
          @media ${device.mobileS} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            position: relative;
            margin-left: 400px;
            height: 100vh;
            width: 450px;
            bottom: -11px;
          }
          @media ${device.desktop} {
          }
        }

        .bigideas {
          @media ${device.mobileS} {
            position: relative;
            top: -50vh;
            font-size: 40px;
            letter-spacing: -2px;
            line-height: 0.95;
            margin-left: 20px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            position: absolute;
            padding: 20px;
            margin-left: 150px;
            width: 500px;
            top: 50px;
            font-size: 60px;
            line-height: 0.95;
            letter-spacing: -3px;
          }
          @media ${device.desktop} {
          }

          color: #e64445;
          z-index: 999;
          font-weight: 700;
        }

        .redband {
          @media ${device.mobileS} {
            height: 300px;
            width: 300px;
            top: -60px;
            left: -30px;
            font-size: 25px;
            line-height: 35px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            position: absolute;
            z-index: 2;
            height: 500px;
            width: 500px;
            top: -150px;
            margin-left: 475px;
            font-size: 35px;
            padding-top: 2.5%;
          }
          @media ${device.desktop} {
          }
          border-radius: 100%;
          background-color: rgba(230, 21, 22, 0.76);
          font-family: Futura;
          font-weight: bold;
          position: absolute;
          justify-content: center;
          text-align: center;
        }

        .redband h1 {
          @media ${device.mobileS} {
            padding-left: 60px;
            padding-top: 110px;
            width: 190px;
            line-height: 40px;
            text-align: left;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            padding-left: 0;
            padding-top: 0;
            width: auto;
            position: absolute;
            margin-left: 100px;
            margin-top: 200px;
            line-height: 65px;
          }
          @media ${device.desktop} {
          }
        }

        .monogirl {
          @media ${device.mobileS} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            height: 100vh;
            width: 850px;
            top: -60px;
            position: relative;
            left: 200px;
            height: 120vh;
            bottom: -11px;
          }
          @media ${device.desktop} {
          }
        }

        .goviral {
          @media ${device.mobileS} {
            font-size: 70px;
            line-height: 80px;
            width: 100vw;
            margin-top: -55vh;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            margin-top: 0;
            left: 75px;
            top: -30px;
            width: 1000px;
            font-size: 130px;
            margin-left: 0px;
            letter-spacing: -10px;
            line-height: 260px;
          }
          @media ${device.desktop} {
          }
          position: absolute;
          color: #fcf4ec;
          font-family: Futura;
          font-weight: bold;
        }

        .missions-list {
          @media ${device.mobileS} {
            margin-top: -45vh;
            font-size: 20px;
            width: 80vw;
            margin-left: -20px;
            line-height: 32px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            display: flex;
            margin-top: 0;

            top: 430px;
            margin-left: -300px;

            font-size: 28px;
            line-height: 32px;
          }
          @media ${device.desktop} {
          }
          position: absolute;
          list-style: none;
          font-family: Futura;
          color: #1b1b1b;
        }
        .missions {
          color: #fffafa;
        }

        .missions-list li {
          @media ${device.mobileS} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            padding: 15px;
            width: 450px;
          }
          @media ${device.desktop} {
          }
        }

        .second-column {
          @media ${device.mobileS} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            margin-top: -140px;
          }
          @media ${device.desktop} {
          }
        }

        .bullet {
          @media ${device.mobileS} {
            margin-right: 7.5px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            font-weight: bold;
            margin-right: 15px;
          }
          @media ${device.desktop} {
          }
          color: #e64445;
        }

        .cta-call {
          @media ${device.mobileS} {
            width: 85vw;
            height: 8vh;
            font-size: 2.6vh;
            padding: 10px;
            margin-left: 20px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            padding: 20px 50px;
            height: 70px;
            width: 450px;
            position: relative;

            top: 90vh;
            left: 16vw;

            font-size: 24px;
          }
          @media ${device.desktop} {
          }
          position: absolute;
          background-color: #e64445;
          display: flex;
          font-family: "Montserrat", sans-serif;
          align-items: center;
          text-align: center;
          cursor: pointer;
          z-index: 2;
          color: #fffafa;
          border: none;
          font-weight: bold;
        }

        .croped {
          @media ${device.mobileS} {
            width: 130px;
            height: 90vh;
            margin-top: 20vh;
            margin-left: -15px;
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            width: 220px;
            height: 110vh;
            margin-left: 730px;
            margin-top: auto;
            top: 60px;
          }
          @media ${device.desktop} {
          }
          position: absolute;
          background-color: #1e1e1e;
        }
      `}</style>
    </>
  );
}

export default OurMission;

import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { device } from "../styles/device";

export default function Ourblog() {
  return (
    <>
      <section className="ourblog">
        <h2 className="headofsection">
          Our <span className="---">------</span> <br />
          <span className="articles">articles.</span>
        </h2>
        <h4 className="subtitleofsection">What we share.</h4>
        <div className="ourblogs__emptyicons">
          <div className="row1">
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="row2">
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div className="ourblogs__paragraphs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            rem incidunt cum officiis asperiores, nemo ipsa velit qui, eos
            aperiam, porro ex? Dolorem, rerum eveniet consectetur voluptas
            deserunt, laboriosam et consequuntur sint temporibus neque aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            rem incidunt cum officiis asperiores, nemo ipsa velit qui, eos
            aperiam, porro ex? Dolorem, rerum eveniet consectetur voluptas
            deserunt, laboriosam et consequuntur sint temporibus neque aliquid.
          </p>

          <div className="ourblogs__cta">
            DIVE INTO OUR BLOG <ArrowRightIcon fontSize="large" />
          </div>
        </div>
        <div className="endpoint">
          <h3>An idea? A project?</h3>
          <p>Feel free to contact us.</p>
          <a href="mailto:weare@branddded.com">
            <div className="ask">
              ASK YOUR QUESTION <ArrowRightIcon fontSize="large" />
            </div>
          </a>
        </div>
      </section>
      <style jsx>
        {`
          .ourblog {
            @media ${device.mobileS} {
              width: 100vw;
              height: 200vh;
              top: 430vh;
              left: -10px;
              clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              left: 400vw;
              height: 102vh;
              width: 185vw;
              top: 0;
              clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
            }
            @media ${device.desktop} {
            }
            position: absolute;
            background-color: #fffafa;
          }

          .headofsection {
            @media ${device.mobileS} {
              font-size: 50px;
              line-height: 35px;
              margin-top: 100px;
              margin-left: 30px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-left: 300px;
              margin-top: 150px;
              line-height: 75px;

              font-size: 80px;
              letter-spacing: -5px;
            }
            @media ${device.desktop} {
            }
            color: #1e1e1e;
            position: absolute;
          }

          .subtitleofsection {
            @media ${device.mobileS} {
              margin-left: 30px;
              margin-top: 230px;
              font-size: 28px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-left: 300px;
              margin-top: 370px;
              line-height: 75px;

              font-size: 40px;
              letter-spacing: -2px;
            }
            @media ${device.desktop} {
            }
            position: absolute;
            color: #1e1e1e;
          }

          .ourblogs__paragraphs {
            @media ${device.mobileS} {
              position: relative;
              margin-top: 80vh;
              padding-left: 30px;
              padding-right: 30px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              padding-left: 0;
              padding-right: 0;
              display: flex;
              top: 0;
              margin-left: 300px;
              margin-top: 480px;
              position: absolute;
            }
            @media ${device.desktop} {
            }
            color: gray;
          }

          .ourblogs__paragraphs p {
            @media ${device.mobileS} {
              padding-right: 30px;
              width: 90vw;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              width: 350px;
              padding-right: 20px;
            }
            @media ${device.desktop} {
            }
            text-wrap: wrap;
          }

          .articles {
            @media ${device.mobileS} {
              letter-spacing: -1px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              letter-spacing: -2.5px;
            }
            @media ${device.desktop} {
            }
          }

          .ourblogs__cta {
            @media ${device.mobileS} {
              width: 85vw;
              height: 7vh;
              font-size: 2.6vh;
              margin-top: 30px;
              padding: 10px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              padding: 20px 50px;
              height: 70px;
              width: 450px;
              position: relative;
              margin-top: 72.5px;
              margin-left: 60px;

              font-size: 22px;
            }
            @media ${device.desktop} {
            }
            position: absolute;

            display: flex;
            color: #fffafa;
            border: none;
            background-color: #1e1e1e;
            font-weight: bold;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }

          .ourblogs__emptyicons {
            @media ${device.mobileS} {
              position: absolute;
              left: 25px;
              top: -100px;
              margin: 0 auto;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              top: 125px;
              left: 700px;
              height: 200px;
              width: 70vw;
              display: flex;
            }
            @media ${device.desktop} {
            }
          }
          .row1 {
            @media ${device.mobileS} {
              display: flex;
              margin-top: 375px;
            }
            @media ${device.laptop} {
              margin-top: 0px;
            }
          }
          .row2 {
            @media ${device.mobileS} {
              display: flex;
              position: absolute;
            }
            @media ${device.laptop} {
              margin-top: 0px;
              position: relative;
            }
          }
          .icon {
            @media ${device.mobileS} {
              height: 150px;
              width: 150px;
              margin: 7.5px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              height: 175px;
              width: 175px;
              margin: auto;
              margin-top: 0;
              margin-right: 20px;
            }
            @media ${device.desktop} {
            }
            border-radius: 20px;
            background-color: #fffafa;
            box-shadow: 3px 2px 3px 2px rgba(0, 0, 0, 0.07);
          }

          .endpoint {
            @media ${device.mobileS} {
              bottom: 100px;
              width: 110vw;
              height: 40vh;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              right: 0;
              bottom: -10vh;
              margin-bottom: -10px;

              width: 60vw;
              height: 70vh;
            }
            @media ${device.desktop} {
            }
            background-color: #1e1e1e;
            border-radius: 70px 0px 0px 0px;
            z-index: 2;
            position: absolute;
          }

          .endpoint h3 {
            @media ${device.mobileS} {
              font-size: 30px;
              margin-left: 30px;
              margin-top: 40px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-top: 80px;
              margin-left: 80px;
              width: 600px;

              font-size: 50px;
            }
            @media ${device.desktop} {
            }
            font-weight: 700;
            color: #fffafa;
          }

          .endpoint p {
            @media ${device.mobileS} {
              margin-left: 30px;
              margin-top: -15px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              margin-top: -50px;
              margin-left: 80px;
              width: 600px;

              font-size: 30px;
            }
            @media ${device.desktop} {
            }
            color: #fffafa;
            font-weight: 400;
          }

          .ask {
            @media ${device.mobileS} {
              width: 85vw;
              height: 8vh;
              font-size: 2.6vh;
              padding: 10px;
              margin-left: 30px;
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              background-color: #e64445;
              display: flex;
              padding: 20px 50px;
              height: 70px;
              width: 450px;

              margin-top: 75px;
              margin-left: 80px;

              font-size: 22px;
            }
            @media ${device.desktop} {
            }
            font-family: "Montserrat", sans-serif;
            align-items: center;
            text-align: center;
            cursor: pointer;
            color: #fffafa;
            border: none;
            font-weight: bold;
            position: relative;
            background-color: #e64445;
            display: flex;
          }
        `}
      </style>
    </>
  );
}

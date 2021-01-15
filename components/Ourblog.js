import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { device } from "../styles/device";
import Link from "next/link";

export default function Ourblog() {
  return (
    <>
      <section className="ourblog">
        <h2 className="headofsection">
          Our <span className="---">----</span> <br />
          <span className="articles">articles.</span>
        </h2>
        <h4 className="subtitleofsection">
          Learn how to bring ideas to the world.
        </h4>
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
            An idea can go viral, and change the world, or can die without even
            being born. The difference between both is very simple: it is how it
            is communicated. <br />
            <br />
            The skill to communicate online effectively is the most valuable
            asset in today's world.
          </p>

          <p>
            That is why we design designers. <br />
            Skilled creatives who knows how to impact, fascinate and convert.
            <br />
            <br />
            In our blog, you will find articles on UI/UX Design, programming and
            growth hacking and a lot of advices for you to bring changes into
            this world.
          </p>

          <Link href="/posts">
            <div className="ourblogs__cta">
              DIVE INTO OUR BLOG <ArrowRightIcon fontSize="large" />
            </div>
          </Link>
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
              height: 230vh;
              top: 430vh;
              left: -10px;
              clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
            }
            @media ${device.tablet} {
              top: 450vh;
              height: 200vh;
            }
            @media ${device.laptop} {
              left: 500vw;
              height: 102vh;
              width: 185vw;
              top: 0;
              clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
            }
            @media ${device.desktop} {
              left: 430vw;
              width: 215vw;
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
              margin-top: 130px;
              font-size: 65px;
              line-height: 50px;
              margin-left: 50px;
            }
            @media ${device.laptop} {
              margin-left: 300px;
              margin-top: 150px;
              line-height: 75px;

              font-size: 80px;
              letter-spacing: -5px;
            }
            @media ${device.desktop} {
              margin-left: 700px;
              margin-top: 300px;
              line-height: 130px;

              font-size: 150px;
              letter-spacing: -10px;
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
              margin-left: 50px;
              margin-top: 270px;

              font-size: 31px;
            }
            @media ${device.laptop} {
              margin-left: 300px;
              margin-top: 350px;
              line-height: 75px;

              font-size: 40px;
              letter-spacing: -2px;
            }
            @media ${device.desktop} {
              margin-left: 700px;
              margin-top: 600px;
              line-height: 75px;

              font-size: 60px;
              letter-spacing: -2px;
            }
            position: absolute;
            color: #1e1e1e;
          }

          .ourblogs__paragraphs {
            @media ${device.mobileS} {
              position: relative;
              margin-top: 85vh;
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
              margin-left: 275px;
              margin-top: 420px;
              position: absolute;
            }
            @media ${device.desktop} {
              padding-left: 0;
              padding-right: 0;
              display: flex;
              top: 0;
              margin-left: 660px;
              margin-top: 780px;
              position: absolute;
            }
            color: gray;
          }

          .ourblogs__paragraphs p {
            font-family: "Poppins";
            line-height: 1.2;
            @media ${device.mobileS} {
              padding-right: 40px;
              margin-left: 5px;
              font-size: 20px;
              width: 80vw;
            }
            @media ${device.tablet} {
              width: 70vw;
              margin-left: 30px;
            }

            @media ${device.laptop} {
              width: 350px;
              padding-right: 20px;
            }
            @media ${device.desktop} {
              width: 700px;
              padding-right: 50px;
              font-size: 40px;
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
              padding-top: 20px;
              letter-spacing: -10px;
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
              margin-left: 20px;
              width: 70vw;
              padding-left: 30px;
            }
            @media ${device.laptop} {
              padding: 20px 50px;
              height: 70px;
              width: 450px;
              position: relative;
              margin-top: 170px;
              margin-left: 60px;

              font-size: 22px;
            }
            @media ${device.desktop} {
              margin-top: 400.5px;
              width: 40vw;
              height: 10vh;
              font-size: 4vh;
              padding: 40px;
            }
            position: absolute;

            display: flex;
            color: #fffafa;
            border: none;
            background-color: #1e1e1e;
            font-weight: bold;
            font-family: "Poppins", sans-serif;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }

          .ourblogs__emptyicons {
            @media ${device.mobileS} {
              position: absolute;
              left: 25px;
              top: -40px;
              margin: 0 auto;
            }
            @media ${device.tablet} {
              position: absolute;
              left: 120px;
              top: -40px;
              margin: 0 auto;
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
              height: 230px;
              width: 230px;
              margin: 10px;
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
              bottom: 0px;
              margin-top: 70px;
              width: 110vw;
              height: 50vh;
            }
            @media ${device.tablet} {
              bottom: 0px;
              margin-top: 0px;
              width: 100vw;
              height: 65vh;
            }
            @media ${device.laptop} {
              right: 0;
              bottom: -10vh;
              margin-bottom: -10px;

              width: 60vw;
              height: 70vh;
            }
            @media ${device.desktop} {
              right: 0;
              bottom: -10vh;
              margin-bottom: -10px;

              width: 80vw;
              height: 80vh;
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
              margin-left: 50px;
            }
            @media ${device.laptop} {
              margin-top: 80px;
              margin-left: 80px;
              width: 600px;

              font-size: 50px;
            }
            @media ${device.desktop} {
              margin-top: 120px;
              margin-left: 120px;
              width: 900px;

              font-size: 80px;
            }
            font-weight: 700;
            color: #fffafa;
          }

          .endpoint p {
            font-family: "Poppins";
            @media ${device.mobileS} {
              margin-left: 30px;
              margin-top: -15px;
            }
            @media ${device.tablet} {
              margin-left: 50px;
            }
            @media ${device.laptop} {
              margin-top: -50px;
              margin-left: 80px;
              width: 600px;

              font-size: 30px;
            }
            @media ${device.desktop} {
              margin-top: 30px;
              margin-left: 120px;
              font-size: 40px;
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
              margin-left: 50px;
              width: 70vw;
              padding-left: 30px;
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
              width: 40vw;
              height: 10vh;
              font-size: 4vh;
              padding: 40px;
            }
            font-family: "Poppins", sans-serif;
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

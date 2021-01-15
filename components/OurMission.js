import React, { useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { device } from "../styles/device";
import { useEffect } from "react";
import Mission from "./Mission";

function OurMission() {
  const listOfMissions = [
    {
      name: "Build an impactful brand identity",
      handle: "Branding",
      description:
        "Together, we'll design the experience, the story you'll share to the world. An inspiring brand can lead people to take action, and dream with you. ",
      image: "/icons/branding.png",
    },
    {
      name: "Turn your idea into an experience",
      handle: "User Experience",
      description:
        "We design user experiences and interfaces they'll love to use.",
      image: "/icons/ux.png",
    },
    {
      name: "Start to sell your products online",
      handle: "Shopping Experience",
      description:
        "We build up your e-commerce interface and landing pages, optimized for high conversion rates.",
      image: "/icons/shop.png",
    },
    {
      name: "We code all the features you need",
      handle: "Programming",
      image: "/icons/responsive.png",
      description:
        "Developping from A to Z your website, using the latest technologies of computer science.",
    },
    {
      name: "Sublime your products",
      handle: "Photography",
      image: "/icons/picture.png",
      description:
        "We take pictures of your products in order to show the most value to your clients.",
    },
    {
      name: "Be everywhere, and go viral on Social Medias",
      handle: "Content strategy",
      image: "/icons/socials.png",
      description:
        "We'll create a content strategy for Instagram, Twitter and Facebook to go viral.",
    },
    {
      name: "Generate a lot of trafic thanks to SEO",
      handle: "Search Engine Optimization",
      image: "/icons/seo.png",
      description:
        "We'll implement techniques to make you rank higher on Google search.",
    },
    {
      name: "Acquire and turn visitors into custommers.",
      handle: "Growth hacking",
      image: "/icons/growth.png",
      description:
        "We use growth hacking techniques to generate the maximum amount of leads in the minimum amount of time. Acquisition, convertion, retention and referal strategies.",
    },
  ];
  const [missions] = useState(listOfMissions);
  useEffect(() => {
    console.log(missions);
  }, []);

  return (
    <>
      <div className="triangle">
        <h3 className="experiences">We design experiences</h3>
        <div className="redband">
          <h1>
            Our <span className="---">----</span> <br />
            <span className="missions">mission.</span>
          </h1>
        </div>
      </div>

      <div className="agency__description">
        <p>
          We want big ideas to be heard, and good products to be sold. Our main
          goal is to make you go viral quickly, and expand worldwide. We
          specialize in Acquisition & Conversion.
        </p>
      </div>

      <div className="monogirl">
        {/* <div className="goviral">GO VIRAL</div> */}

        <div className="croped"></div>

        <ul className="missions__list__wrapper">
          {" "}
          {missions.map((mission) => (
            <Mission mission={mission} />
          ))}
          <a href="mailto:weare@branddded.com">
            <button className="cta-call">
              CONTACT US <ArrowRightIcon fontSize="large" />
            </button>
          </a>
        </ul>
      </div>

      <style jsx>{`
        .triangle {
          @media ${device.mobileS} {
            width: 100vw;
            height: 250vh;
            top: 130vh;
            left: 0;
            clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0% 100%);
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            top: 0;
            left: 76vw;
            height: 101vh;
            width: 320vw;
            clip-path: polygon(11% 0, 100% 0%, 100% 100%, 22% 100%);
          }
          @media ${device.desktop} {
            left: 130vw;
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

        .superpowers {
          @media ${device.mobileS} {
            position: relative;
            top: -50vh;
            font-size: 40px;
            letter-spacing: -2px;
            line-height: 0.95;
            margin-left: 20px;
          }
          @media ${device.tablet} {
            font-size: 80px;
            width: 80vw;
            padding: 30px;
          }
          @media ${device.laptop} {
            position: absolute;
            padding: 20px;
            margin-left: 150px;
            width: 1350px;
            top: 90px;
            left: 400px;
            font-size: 75px;
            line-height: 0.95;
            letter-spacing: -3px;
          }
          @media ${device.desktop} {
            font-size: 150px;
            width: 1200px;
          }

          color: #e64445;
          z-index: 999;
          font-weight: 700;
        }
        li {
          list-style: none;
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
            height: 400px;
            width: 400px;
            top: -100px;
            left: -80px;
          }
          @media ${device.laptop} {
            position: absolute;
            z-index: 2;
            height: 550px;
            width: 550px;
            top: -200px;
            margin-left: 800px;
            font-size: 35px;
            padding-top: 2.5%;
          }
          @media ${device.desktop} {
            top: 0px;
            left: 60px;
            height: 800px;
            width: 800px;
          }
          border-radius: 100%;
          background-color: rgba(230, 21, 22, 0.76);
          font-family: "Poppins";
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
            padding-left: 110px;
            padding-top: 200px;
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
            margin-left: 200px;
            margin-top: 100px;
            font-size: 130px;
            line-height: 90px;
          }
        }

        .agency__description {
          position: relative;
          font-size: 23px;
          width: 420px;
          font-family: "Poppins";
          color: black;
          top: 330px;
          left: 400px;
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
            font-size: 140px;
            line-height: 80px;

            margin-top: -50vh;
          }
          @media ${device.laptop} {
            margin-top: 0;
            left: 700px;
            top: -30px;
            width: 1000px;
            font-size: 170px;
            margin-left: 0px;
            letter-spacing: -10px;
            line-height: 260px;
          }
          @media ${device.desktop} {
            font-size: 200px;
          }
          position: absolute;
          color: #fcf4ec;
          font-family: "Poppins";
          font-weight: bold;
        }

        .missions__list__wrapper {
          @media ${device.mobileS} {
            margin-top: -45vh;
            font-size: 20px;
            width: 80vw;
            margin-left: -20px;
            line-height: 32px;
          }
          @media ${device.tablet} {
            margin-top: -55vh;
            font-size: 30px;
            line-height: 40px;
            margin-left: 10px;
          }
          @media ${device.laptop} {
            position: relative;
            columns: 3;
            rows: 3;
            height: 90vh;
            width: 150vw;
            list-style: none;
            justify-content: center;
            align-items: center;
            top: 550px;
            left: 300px;
          }
          @media ${device.desktop} {
            display: flex;
            margin-top: 0;

            top: 800px;
            margin-left: -200px;

            font-size: 70px;
            line-height: 80px;
          }
          position: absolute;
          list-style: none;
          font-family: "Poppins";
          color: #1b1b1b;
        }
        .missions {
          color: #fffafa;
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
            margin-left: 40px;
            width: 70vw;
            padding-left: 30px;
          }
          @media ${device.laptop} {
            padding: 20px 50px;
            height: 70px;
            width: 450px;
            font-size: 22px;
            margin-left: 200px;
            margin-top: 120px;
          }
          @media ${device.desktop} {
            width: 40vw;
            height: 10vh;
            font-size: 4vh;
            padding: 40px;
          }
          position: absolute;
          background-color: #e64445;
          display: flex;
          font-family: "Poppins", sans-serif;
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
            width: 160px;
          }
          @media ${device.laptop} {
            width: 220px;
            height: 110vh;
            margin-left: 2700px;
            margin-top: auto;
            top: 60px;
          }
          @media ${device.desktop} {
            width: 350px;
            height: 110vh;
            margin-left: 1850px;
            margin-top: auto;
            top: 60px;
          }
          position: absolute;
          background-color: #1e1e1e;
        }

        li {
          list-style: none;
        }
      `}</style>
    </>
  );
}

export default OurMission;

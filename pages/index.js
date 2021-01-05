import Head from "next/head";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TheHeader from "../components/TheHeader";
import Image from "next/image";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import Cursor from "../components/CustomCursor";
import CustomCursor from "../components/CustomCursor";
import { gsap, TimelineLite, Power3 } from "gsap";

const GlobalStyle = createGlobalStyle`
        body {
          padding: 0;
          margin: 0;
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          background-color: ${(props) => props.theme.background};
    
          overflow-y: hidden;
          max-width: 100vh;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */

         ::-webkit-scrollbar {
              display: none;
          }
        }


        * {
          box-sizing: border-box;
    
        }

        .whole {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: row;
            width: 100vh;
            height: 100vw;
            transform: rotate(-90deg) translateX(-100vh);
            transform-origin: top left;
            color: ${(props) => props.theme.text};
            overflow-x: hidden;
        }

        main {
          display: flex;
          flex-direction: row;
          width: 201vw;
          transform: rotate(90deg) translateY(-100vh);
          transform-origin: top left;
        }

        strong {
          color: #e64445;
          font-weight: 500;
        }

        .section {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-big_text h1 {
          color: ${(props) => props.theme.background};
          -webkit-text-stroke: 2px ${(props) => props.theme.text};
        }
`;

export default function Home() {
  let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    tl.from(".weare", {
      x: -15,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    tl.from(".---", {
      x: -15,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".Branddded", {
      x: -15,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".creative", {
      x: -25,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".free", {
      scale: 1.8,
      x: -25,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".draw", {
      scale: 1.8,
      x: -25,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".design", {
      scale: 1.8,
      x: -25,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
    tl.from(".develop", {
      scale: 1.8,
      x: -25,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.01,
    });
  }, []);

  const [theme, setTheme] = useState("red");

  const toggleTheme = () => {
    // if the theme is not red, then set it to dark
    if (theme === "red") {
      setTheme("light");
      // otherwise, it should be light
    } else {
      setTheme("red");
    }
  };

  const redTheme = {
    background: "rgba(230, 21, 22, 0.75)",
    text: "#fff",
  };

  const lightTheme = {
    background: "#fff",
    text: "rgba(230, 21, 22, 0.75)",
  };

  return (
    <ThemeProvider theme={theme === "red" ? redTheme : lightTheme}>
      <div className="whole">
        <GlobalStyle />
        <CustomCursor />
        <Head>
          <title>Branddded - Draw, Design, Develop</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <TheHeader />
        <main onClick={toggleTheme}>
          <div className="section one">
            <div className="hero-text-wrapper">
              <h1 className="weare">
                We are <span className="---">--------</span> <br />
                <span className="Branddded">Branddded.</span>
              </h1>
              <h1 className="creative">
                A creative agency <br />
                for growth-driven projects.
              </h1>
              <button className="free">
                BOOK A FREE MEETING
                <ArrowRightIcon fontSize="large" />
              </button>
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
                  <span className="bullet">I</span>Take{" "}
                  <strong>pictures</strong> of your products.
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
                  <span className="bullet">I</span>Use{" "}
                  <strong>growth hacking</strong> strategies to go viral.
                </li>
              </div>
            </ul>
            <button className="cta-call">CONTACT US</button>
          </div>
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

          <div className="brands">
            <ul>
              <div className="firstcol">
                <li>
                  <Image
                    src="/tomtom.png"
                    alt="Picture of the author"
                    width={175}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="/bose.png"
                    alt="Picture of the author"
                    width={175}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/theirstories.png"
                    alt="Picture of the author"
                    width={165}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/uva.png"
                    alt="Picture of the author"
                    width={165}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="/transcendance.png"
                    alt="Picture of the author"
                    width={165}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/ibuildshops.png"
                    alt="Picture of the author"
                    width={165}
                    height={50}
                  />
                </li>
              </div>
              <div className="secondcol">
                <li>
                  <Image
                    src="/lecourtier.png"
                    alt="Picture of the author"
                    width={165}
                    height={60}
                  />
                </li>
                <li>
                  <Image
                    src="/esse.png"
                    alt="Picture of the author"
                    width={165}
                    height={60}
                  />
                </li>
                <li>
                  <Image
                    src="/nutrimams.png"
                    alt="Picture of the author"
                    width={165}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/lachiva.png"
                    alt="Picture of the author"
                    width={165}
                    height={60}
                  />
                </li>
                <li>
                  <Image
                    src="/prixpyrenees.png"
                    alt="Picture of the author"
                    width={165}
                    height={35}
                  />
                </li>
                <li>
                  <Image
                    src="/far.png"
                    alt="Picture of the author"
                    width={165}
                    height={60}
                  />
                </li>
              </div>
            </ul>
          </div>
          <section className="socialnetworks">
            <div className="socialnetworks__bigtext">
              <div className="socialnetworks__bigtext-seemore">
                SEE MORE <div className="bigline"></div>
              </div>
              <div className="socialnetworks__bigtext-oursocial">
                ON OUR SOCIAL
              </div>
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
                <li>
                  <Image
                    src="/instagram.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </li>
                <li>
                  <Image
                    src="/twitter.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </li>
                <li>
                  <Image
                    src="/behance.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </li>
                <li>
                  <Image
                    src="/facebook.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </li>
              </ul>
            </div>
          </section>
          <section className="ourblog">
            <h2 className="headofsection">
              Our <span className="---">------</span> <br />
              <span className="articles">articles.</span>
            </h2>
            <h4 className="subtitleofsection">What we share.</h4>
            <div className="ourblogs__emptyicons">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
            <div className="ourblogs__paragraphs">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rem incidunt cum officiis asperiores, nemo ipsa velit
                qui, eos aperiam, porro ex? Dolorem, rerum eveniet consectetur
                voluptas deserunt, laboriosam et consequuntur sint temporibus
                neque aliquid.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rem incidunt cum officiis asperiores, nemo ipsa velit
                qui, eos aperiam, porro ex? Dolorem, rerum eveniet consectetur
                voluptas deserunt, laboriosam et consequuntur sint temporibus
                neque aliquid.
              </p>
              <div className="ourblogs__cta">
                Dive into our blog <ArrowRightIcon fontSize="large" />
              </div>
            </div>

            <div className="endpoint">
              <h3>An idea? A project?</h3>
              <p>Feel free to contact us.</p>
              <div className="ask">ASK YOUR QUESTION</div>
            </div>
          </section>
        </main>

        <style jsx>{`
          .hero-text-wrapper {
            position: absolute;
            left: 10vw;
            top: 15vh;
            width: 50vw;
          }

          .hero-text-wrapper h1 {
            font-weight: 700;
            font-size: 4.5vw;
            line-height: 1.1;
            letter-spacing: -1.5px;
          }

          .--- {
            letter-spacing: -10px;
            font-weight: 900;
          }

          .hero-text-wrapper button {
            display: flex;
            padding: 20px 30px;
            background-color: #fffafa;
            border: none;
            color: rgba(230, 21, 22, 0.75);
            font-weight: bold;
            font-size: 22px;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            cursor: pointer;
          }

          .hero-big_text h1 {
            position: relative;
            line-height: 170px;
            letter-spacing: -15px;
            left: -15vw;
            z-index: 999;

            text-shadow: -2px 1px 2px rgba(255, 255, 255, 0.82);
            font-size: calc(1em + 20vw);
            font-weight: 900;
          }

          .triangle {
            position: absolute;
            background: #fffafa;
            left: 100vw;
            height: 101vh;
            width: 200vw;
            clip-path: polygon(11% 0, 100% 0%, 100% 100%, 22% 100%);
          }

          .degrade {
            position: relative;
            margin-left: 400px;
            height: 100vh;
            width: 450px;
            bottom: -11px;
          }

          .bigideas {
            padding: 20px;
            position: absolute;
            margin-left: 150px;
            width: 500px;
            top: 50px;
            z-index: 999;
            font-weight: 700;
            font-size: 60px;
            line-height: 0.95;
            color: #e64445;
            letter-spacing: -3px;
          }

          .redband {
            position: absolute;
            z-index: 2;
            height: 500px;
            width: 500px;
            top: -150px;
            border-radius: 100%;
            margin-left: 475px;
            background-color: rgba(230, 21, 22, 0.75);
            font-family: Futura;
            font-weight: bold;
            font-size: 35px;
            justify-content: center;
            text-align: center;
            padding-top: 2.5%;
          }

          .redband h1 {
            position: absolute;
            margin-left: 100px;
            margin-top: 200px;
            line-height: 65px;
          }

          .monogirl {
            height: 100vh;
            width: 850px;
            top: -60px;
            position: relative;
            left: 200px;
            height: 120vh;
            bottom: -11px;
          }

          .goviral {
            color: #fcf4ec;
            left: 75px;
            position: absolute;
            top: -30px;
            font-family: Futura;
            width: 1000px;
            font-weight: bold;
            font-size: 130px;
            margin-left: 0px;
            letter-spacing: -10px;
            line-height: 260px;
          }

          .missions-list {
            display: flex;
            position: absolute;
            top: 430px;
            margin-left: -300px;
            font-family: Futura;
            color: #1b1b1b;
            font-size: 28px;
            line-height: 32px;
            list-style: none;
          }

          .missions-list li {
            padding: 15px;
            width: 450px;
          }

          .second-column {
            margin-top: -140px;
          }

          .bullet {
            color: #e64445;
            font-weight: bold;
            margin-right: 15px;
          }

          .cta-call {
            position: absolute;
            border: none;
            background-color: #e64445;
            top: 90vh;
            margin-left: 200px;
            width: 400px;
            padding: 15px;
            color: #fffafa;
            font-weight: bold;
            font-size: 22px;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            cursor: pointer;
            z-index: 2;
          }
          .typographies {
            position: absolute;
            left: 180vw;
          }
          .big-b {
            position: absolute;
            margin-left: 850px;
            top: -500px;
            font-family: Futura;
            font-size: 900px;
            font-style: italic;
            color: #e64445;
          }

          .branddded {
            position: absolute;
            font-family: Futura;
            font-size: 100px;
            color: #fffafa;
            transform: rotate(-90deg);
            margin-left: 520px;
            top: 200px;
            letter-spacing: -7px;
          }

          .triple-d {
            color: #e64445;
          }

          .light {
            position: absolute;
            color: #fffafa;
            margin-left: 712px;
            font-size: 30px;
            top: 490px;
          }

          .round {
            position: absolute;
            height: 125px;
            width: 125px;
            background-color: #e64445;
            border-radius: 100%;
            margin-left: 1200px;
            top: 550px;
          }

          .brands {
            position: absolute;
            left: 280vw;
            top: 5px;
            background: #1b1b1b;
            height: 101vh;
            width: 530px;
            padding-top: 15px;
            z-index: 3;
          }

          .square {
            height: 70vh;
            width: 70vh;
            border-radius: 100%;
            background-color: #1e1e1e;
            position: absolute;
            margin-left: 55vw;
            top: 70vh;
            font-size: 35px;
            justify-content: center;
            text-align: center;
          }

          .square h1 {
            position: absolute;
            margin-top: 90px;
            left: 100px;
            line-height: 45px;
            letter-spacing: -5px;
          }

          .brands ul {
            display: flex;
          }

          .firstcol li {
            display: flex;
            margin: auto;
            list-style: none;
            padding: 25px;
            margin-left: 2.5%;
          }

          .secondcol li {
            display: flex;
            margin: auto;
            list-style: none;
            padding: 27.5px;
            margin-left: 4%;
          }

          .experiences {
            position: absolute;
            margin-left: 190px;
            top: 160px;
            font-size: 35px;
            letter-spacing: -2px;
            color: #e64445;
            transform: rotate(67.5deg);
          }
          .missions {
            color: #fffafa;
          }
          .works {
            color: #fffafa;
          }

          .border1 {
            position: absolute;
            z-index: 1;
            bottom: 0;
            margin-left: 180px;
            height: 160px;
            width: 520px;
            border-left: solid 3px #1e1e1e;
            border-top: solid 3px #1e1e1e;
          }
          .border2 {
            position: absolute;
            z-index: 1;
            bottom: 0;
            margin-left: 120px;
            margin-bottom: 160px;
            height: 55vh;
            width: 580px;
            border-right: solid 3px #1e1e1e;
            border-top: solid 3px #1e1e1e;
          }

          .border3 {
            position: absolute;
            z-index: 1;
            top: 0;
            margin-left: 120px;
            height: 290px;
            width: 220px;
            border-left: solid 3px #1e1e1e;
          }

          .croped {
            width: 220px;
            height: 110vh;
            position: absolute;
            background-color: #1e1e1e;
            margin-left: 730px;
            top: 60px;
          }

          .socialnetworks {
            position: absolute;
            left: 319vw;
            width: 90vw;
            height: 102vh;
          }

          .socialnetworks__bigtext {
            position: relative;
            font-family: Futura;
            font-weight: bold;
            font-size: 100px;
            line-height: 75px;
            top: 130px;
            left: 150px;
          }

          .socialnetworks__bigtext-seemore {
            font-size: 40px;
            position: relative;
            margin-bottom: -20px;
            margin-left: 4px;
            display: flex;
            align-items: center;
          }

          .bigline {
            background-color: #fffafa;
            height: 30px;
            width: 900px;
            margin-left: -2.5px;
          }

          .socialnetworks__bigtext-oursocial {
            position: relative;
            top: -1px;
            color: #1e1e1e;
          }

          .socialnetworks__bigtext-networks {
            font-size: 144px;
            margin-top: 15.5px;
          }

          .socialnetworks__bigtext-line1 {
            position: relative;
            height: 450px;
            width: 20px;
            background-color: #1e1e1e;
            left: 28.4vw;
            top: -600px;
          }
          .socialnetworks__bigtext-line2 {
            z-index: -1;
            position: relative;
            height: 350px;
            width: 20px;
            background-color: #1e1e1e;
            top: -900px;
            left: 65.9vw;
          }

          .socialnetworks__bigtext-line3 {
            position: relative;
            height: 350px;
            width: 28px;
            background-color: #fffafa;
            top: -800px;
            left: 0.9vw;
          }

          .socialnetworks__bigtext-line4 {
            position: absolute;
            height: 450px;
            width: 28px;
            background-color: #fffafa;
            top: 200px;
            left: 18.57vw;
          }

          .socialnetworks__bigtext-line5 {
            position: absolute;
            height: 450px;
            width: 28px;
            background-color: #fffafa;
            top: 200px;
            left: 47.19vw;
          }

          .little-text1 {
            position: absolute;
            color: #fffafa;
            font-size: 20px;
            font-weight: 200;
            top: -4vh;
            left: 43vh;
          }

          .little-text2 {
            position: absolute;
            color: #fffafa;
            font-size: 20px;
            font-weight: 200;
            top: 20vh;
            left: -6.5vh;
            transform: rotate(-90deg)
          }

          .little-text3 {
            position: absolute;
            color: #fffafa;
            font-size: 20px;
            font-weight: 200;
            top: 30vh;
            left: 80.5vh;
            transform: rotate(-90deg)
          }

          .ourblog {
            position: absolute;
            background-color: #fffafa;
            left: 400vw;
            height: 102vh;
            width: 185vw;
            clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
          }

          .headofsection {
            position: absolute;
            margin-left: 300px;
            margin-top: 150px;
            line-height: 75px;
            color: #1e1e1e;
            font-size: 80px;
            letter-spacing: -5px;
          }

          .subtitleofsection {
            position: absolute;
            margin-left: 300px;
            margin-top: 350px;
            line-height: 75px;
            color: #1e1e1e;
            font-size: 40px;
            letter-spacing: -2px;
          }

          .ourblogs__paragraphs {
            display: flex;
            margin-left: 300px;
            margin-top: 450px;
            position: absolute;
            color: gray;
          }

          .ourblogs__paragraphs p {
            width: 350px;
            text-wrap: wrap;
            padding-right: 20px;
          }

          .articles {
            letter-spacing: -2.5px;
          }

          .socialnetworks__socialicons ul {
            display: flex;
            list-style: none;
            position: absolute;
            top: 450px;
            margin-left: 320px;
            width: 900px;
          }

          .socialnetworks__socialicons ul li {
            background: #1e1e1e;
            padding: 15px;
            border-radius: 100%;
            margin: 22px;
            cursor: pointer;
          }

          .ourblogs__cta {
            display: flex;
            padding: 20px 50px;
            height: 70px;
            width: 350px;
            position: relative;
            margin-top: 72.5px;
            margin-left: 60px;
            color: #fffafa;
            border: none;
            background-color: #1e1e1e;
            font-weight: bold;
            font-size: 22px;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }

          .ourblogs__emptyicons {
            position: absolute;
            top: 125px;
            left: 700px;
            height: 200px;
            width: 70vw;

            display: flex;
          }

          .icon {
            height: 175px;
            width: 175px;
            border-radius: 20px;
            margin-right: 20px;
            background-color: #fffafa;
            box-shadow: 3px 2px 3px 2px rgba(0, 0, 0, 0.07);
          }

          .endpoint {
            position: absolute;
            right: 0;
            bottom: -10vh;
            margin-bottom: -10px;
            z-index: 2;
            width: 60vw;
            height: 70vh;
            background-color: #1e1e1e;
            border-radius: 70px 0px 0px 0px;
          }

          .endpoint h3 {
            margin-top: 80px;
            margin-left: 80px;
            width: 600px;
            font-weight: 700;
            font-size: 50px;
            color: #fffafa;
          }

          .endpoint p {
            margin-top: -50px;
            margin-left: 80px;
            width: 600px;
            font-weight: 400;
            font-size: 30px;
            color: #fffafa;
          }

          .ask {
            background-color: #e64445;
            display: flex;
            padding: 20px 50px;
            height: 70px;
            width: 350px;
            position: relative;
            margin-top: 72.5px;
            margin-left: 80px;
            color: #fffafa;
            border: none;
            font-weight: bold;
            font-size: 22px;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }

          .
        `}</style>
      </div>
    </ThemeProvider>
  );
}

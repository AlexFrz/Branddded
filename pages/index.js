import Head from "next/head";

// Components
import TheHeader from "../components/TheHeader";
import WeAreBranddded from "../components/WeAreBranddded";
import Image from "next/image";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import Cursor from "../components/CustomCursor";
import CustomCursor from "../components/CustomCursor";
import { gsap, TimelineLite, Power3 } from "gsap";
import OurMission from "../components/OurMission";
import Typographies from "../components/Typographies";
import Brands from "../components/Brands";
import SocialNetworks from "../components/SocialNetworks";
import Ourblog from "../components/Ourblog";
import { device } from "../styles/device";

const GlobalStyle = createGlobalStyle`

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
            overflow-y: hidden;
            max-width: 100vh;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            ::-webkit-scrollbar {
                display: none;
            }
            }
            @media ${device.desktop} {
            }

            margin: 0;
            font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
            background-color: ${(props) => props.theme.background};
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

        .whole {
            min-height: 100vh;
            padding: 0;
           @media ${device.mobileS} {
              width: 100vw;
              height: 100vh;
           }
           @media ${device.tablet} {
            }
            @media ${device.laptop} {
              display: flex;
              flex-direction: row;
              overflow-x: hidden;
              transform: rotate(-90deg) translateX(-100vh);
              transform-origin: top left;
              width: 100vh;
              height: 100vw;
            }    
            @media ${device.desktop} {
            }
    

            color: ${(props) => props.theme.text};
        }

        main {
                    @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              
            }
            @media ${device.desktop} {}

          @media ${device.mobileS} {
            width: 100vw;
          }
         
          
         
          @media ${device.laptop} {
            display: flex;
            flex-direction: row;
            width: 201vw;
            transform: rotate(90deg) translateY(-100vh);
            transform-origin: top left;
          }
     
        }

        strong {
          @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
           
            }
            @media ${device.desktop} {
            }
          color: #e64445;
          font-weight: 500;
        }

        .section {
          @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              
            }
            @media ${device.desktop} {}

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

        .--- {
          letter-spacing: -10px;
          font-weight: 900;
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
        <main>
          <WeAreBranddded />
          <OurMission />
          <Typographies />
          <Brands />
          <SocialNetworks />
          <Ourblog />
        </main>
      </div>
    </ThemeProvider>
  );
}

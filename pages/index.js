import Head from "next/head";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TheHeader from "../components/TheHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Branddded - Draw, Design, Develop</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <TheHeader />
        <div className="hero-text-wrapper">
          <h1>
            We are <span>--------</span> <br /> branddded
          </h1>
          <h1>
            A creative agency <br />
            for growth-driven projects.
          </h1>
          <button>
            Book a free consultation
            <ArrowRightIcon fontSize="large" />
          </button>
        </div>
        <div className="hero-big_text">
          <h1>
            Draw
            <br />
            Design
            <br />
            Develop
          </h1>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

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

        .hero-text-wrapper h1 span {
          letter-spacing: -10px;
        }

        .hero-text-wrapper button {
          display: flex;
          padding: 20px 30px;
          background-color: white;
          border: none;
          color: #ff5a5f;
          font-weight: bold;
          font-size: 22px;
          font-family: "Montserrat", sans-serif;
          align-items: center;
        }

        .hero-big_text h1 {
          position: absolute;
          text-align: center;
          line-height: 170px;
          top: -15vh;
          right: -55vw;
          color: #ff5a5f;
          -webkit-text-stroke: 2px white;
          text-shadow: -2px 2px 2px rgba(255, 255, 255, 0.82);
          font-size: calc(1em + 20vw);
          font-weight: 900;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          background-color: #ff5a5f;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

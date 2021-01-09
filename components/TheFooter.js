import React from "react";
import Logo from "./Logo";
import Image from "next/image";

export default function TheFooter() {
  return (
    <>
      <div className="thefooter">
        <div className="thefooter__headline">
          <h1 className="together">Let's grow together</h1>
          <span className="line"> </span>
        </div>
        <div className="thefooter__bottomline">
          <div className="thefooter__logo">
            <Logo />
          </div>
          <div className="thefooter__menu"></div>
          <div className="thefooter__social">
            <div className="padding">
              {" "}
              <Image src="/instagram.png" width={40} height={40} />
            </div>
            <div className="padding">
              {" "}
              <Image src="/twitter.png" width={40} height={40} />
            </div>
            <div className="padding">
              {" "}
              <Image src="/behance.png" width={40} height={40} />
            </div>
            <div className="padding">
              {" "}
              <Image src="/facebook.png" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .thefooter {
          position: sticky;
          left: 0;
          width: 100%;
          height: 500px;
          margin-top: 50px;
          background-color: #faf8f2;
          color: #1e1e1e;
          text-align: center;
          font-family: ZonaBlack;
        }
        .thefooter__headline {
          padding: 60px;
          font-size: 45px;
          color: #e64445;

          &:hover {
            text-decoration: underline;
          }
        }
        .line {
          position: absolute;
          background-color: rgba(0, 0, 0, 0.1);
          margin-left: -50vw;
          margin-top: 60px;
          width: 100vw;
          height: 1.5px;
        }
        .thefooter__bottomline {
          display: flex;
          justify-content: space-between;
          padding: 50px;
        }
        .thefooter__social {
          display: flex;
        }
        .padding {
          padding-left: 10px;
        }
        .thefooter__logo {
          color: #e64445;
        }
      `}</style>
    </>
  );
}

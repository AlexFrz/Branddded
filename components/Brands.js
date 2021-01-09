import React from "react";
import Image from "next/image";

import { device } from "../styles/device";

const Brands = () => {
  return (
    <>
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

      <style jsx>
        {`
          .brands {
            @media ${device.mobileS} {
              margin-top: 105vh;
              margin-left: -10px;
              width: 103vw;
              height: 62vh;
            }
            @media ${device.tablet} {
              margin-top: 110vh;
              width: 100vw;
            }
            @media ${device.laptop} {
              left: 280vw;
              top: 5px;
              margin-top: auto;
              margin-left: auto;
              height: 101vh;
              width: 530px;
              padding-top: 15px;
            }
            @media ${device.desktop} {
              left: 310vw;
              height: 101vh;
              width: 900px;
              top: -10px;
            }
            position: absolute;
            background: #1b1b1b;
            z-index: 3;
          }

          .brands ul {
            display: flex;
          }

          .firstcol li {
            display: flex;
            margin: auto;
            list-style: none;
            @media ${device.mobileS} {
              padding: 10px 5px;
              margin-left: -25px;
            }
            @media ${device.tablet} {
              padding: 20px 40px;
              margin-left: 70px;
            }
            @media ${device.laptop} {
              padding: 25px;
              margin-left: 2.5%;
              padding-left: auto;
            }
            @media ${device.desktop} {
              width: 450px;
            }
          }

          .secondcol li {
            display: flex;
            margin: auto;
            list-style: none;
            @media ${device.mobileS} {
              padding: 10px 5px;
              padding-right: 5px;
            }
            @media ${device.tablet} {
              padding: 20px 40px;
              margin-left: 30px;
            }
            @media ${device.laptop} {
              padding: 27.5px;
              margin-left: 4%;
            }
            @media ${device.desktop} {
            }
          }

          .experiences {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              margin-left: 190px;
              top: 160px;
              font-size: 35px;
              letter-spacing: -2px;
              transform: rotate(67.5deg);
            }
            @media ${device.desktop} {
            }
            color: #e64445;
          }

          .border1 {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              z-index: 1;
              bottom: 0;
              margin-left: 180px;
              height: 160px;
              width: 520px;
            }
            @media ${device.desktop} {
            }
            border-left: solid 3px #1e1e1e;
            border-top: solid 3px #1e1e1e;
          }
          .border2 {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
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
            @media ${device.desktop} {
            }
          }

          .border3 {
            @media ${device.mobileS} {
            }
            @media ${device.tablet} {
            }
            @media ${device.laptop} {
              position: absolute;
              z-index: 1;
              top: 0;
              margin-left: 120px;
              height: 290px;
              width: 220px;
              border-left: solid 3px #1e1e1e;
            }
            @media ${device.desktop} {
            }
          }
        `}
      </style>
    </>
  );
};

export default Brands;

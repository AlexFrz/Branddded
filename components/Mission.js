import React from "react";
import Image from "next/image";
export default function Mission({ mission }) {
  return (
    <>
      <div className="mission__wrapper_flip">
        <div className="front">
          <div className="front__wrapper">
            <div className="mission__icon">
              <Image src={mission.image} alt="" width={75} height={75} />
            </div>
            <h2
              className="mission__title"
              dangerouslySetInnerHTML={{ __html: mission.name }}
            ></h2>
          </div>
        </div>
        <div className="back">
          <h2 className="back__handle">{mission.handle}</h2>
          <p className="back__paragraph">{mission.description}</p>
        </div>
      </div>

      <style jsx>
        {`
          li {
            list-style: none;
          }
          .mission__wrapper_flip {
            margin-bottom: 40px;
            padding: 20px;

            display: inline-flex;
            background-color: white;
            border-radius: 12px;
            width: 650px;
            height: 180px;
            margin: 15px 0px;
            box-shadow: 7px 5px 7px 4px rgba(0, 0, 0, 0.03);
            justify-content: left;
            text-align: left;
            position: relative;
            > .front,
            > .back {
              z-index: 999;
              display: block;
              transition-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1.275
              );
              transition-duration: 0.5s;
              transition-property: transform, opacity;
            }
            > .front {
              transform: rotateY(0deg);
            }
            > .back {
              position: absolute;
              opacity: 0;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              transform: rotateY(-180deg);
            }
            &:hover {
              > .front {
                transform: rotateY(180deg);
              }
              > .back {
                opacity: 1;
                transform: rotateY(0deg);
              }
            }
            &.flip-vertical {
              > .back {
                transform: rotateX(-180deg);
              }
              &:hover {
                > .front {
                  transform: rotateX(180deg);
                }
                > .back {
                  transform: rotateX(0deg);
                }
              }
            }
            > .back {
              display: block;
              color: white;
              width: inherit;
              background-size: cover !important;
              background-position: center !important;
              height: 200px;
              padding: 1em 2em;
              background: #e64445;
              border-radius: 10px;
              p {
                font-size: 1rem;
                line-height: 130%;
                color: white;
              }
            }
          }

          .mission__icon {
            width: 100px;
            height: 100px;
            margin-top: 20px;
            margin-left: 30px;
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: left;
          }
          .mission__title {
            list-style: none;
            font-weight: 300;
            display: flex;
            padding: 30px;
            margin-top: -2px;
            font-size: 30px;
            align-items: left;
            justify-content: left;
            width: 420px;
          }

          .front__wrapper {
            display: flex;
          }
          .back__handle {
            margin-top: 0px;
          }
        `}
      </style>
    </>
  );
}

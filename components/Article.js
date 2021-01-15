import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import TheHeader from "./TheHeader";
import Logo from "./Logo";

import HamburgerMenu from "./HamburgerMenu";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Article = ({
  title,
  name,
  categories,
  authorImage,
  mainImage,
  publishedAt,
  body,
}) => {
  useEffect((publishedAt) => {
    const date = new Date(publishedAt);
    const convertedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); //prints expected format.
    console.log(convertedDate);
  }, []);

  const classes = useStyles();
  return (
    <>
      <div className="header">
        <Link href="/">
          <Logo />
        </Link>
        <div className="unrotated">
          <HamburgerMenu />
        </div>
      </div>

      <article>
        <div className="article__head">
          <h1 className="article__title">{title}</h1>
          <h3 className="article__summary">
            Quick summary - In this article, we will talk about growth hacking.
            What is growth hacking? What is it made for? How to use growth
            hacking in your personal business? That’s what I will explain to
            you.
          </h3>
          <div className="article__author">
            <div className="author__infos">
              {authorImage && (
                <Avatar
                  alt={name}
                  src={urlFor(authorImage).width(500).url()}
                  className={classes.large}
                />
              )}
              <div className="article__author-name">
                <span className="article__written">
                  By <strong>{name}</strong> in{" "}
                </span>

                <span class="article__category">
                  {categories && (
                    <ul>
                      {categories.map((category) => (
                        <li key={category}>
                          <strong>{category}</strong>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="date_time">
                    {new Date(publishedAt).toDateString()}
                    <br />
                    Reading time: 9min
                  </div>
                </span>
              </div>
            </div>

            <div className="article__buttons">
              <div className="like__button">
                {" "}
                <Image
                  src="/heart.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </div>
              <div className="share__button">
                <Image
                  src="/share.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>{" "}
        </div>

        <img
          src={urlFor(mainImage).url()}
          alt="Picture of the author"
          className="article__image"
        />

        <div className="article__content-section">
          <div className="article__content-text">
            {" "}
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </div>
      </article>

      <style jsx>
        {`
          @font-face {
            font-family: "ZonaBlack";
            src: url("/fonts/Zona\ Black.ttf");
            font-weight: 900;
            font-style: normal;
          }

          .header {
            padding-left: 40px;
            position: absolute;
            width: 100%;
            height: 10%;
            color: #faf8f2;
            display: flex;
            justify-content: space-between;
          }
          .unrotated {
            transform: rotate(90deg);
            margin-right: 40px;
          }
          article {
            font-family: "Poppins", "Poppins", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            padding: 0;
          }
          .article__head {
            width: 101vw;
            height: 140vh;
          }
          .article__title {
            font-family: ZonaBlack;
            font-weight: 800;
            width: 90vw;

            font-size: 70px;
            line-height: 70px;
            color: #faf8f2;
            padding-left: 10vw;
            padding-top: 10vw;
          }

          .article__summary {
            width: 90vw;
            padding-left: 10vw;
            font-size: 26px;

            color: #faf8f2;
            font-weight: 300;
          }
          .author__infos {
            align-items: center;
            display: flex;
          }

          .article__author {
            align-items: center;
            justify-content: space-between;
            display: flex;
            padding-left: 10vw;
            padding-top: 10px;
            width: 89vw;
          }
          .article__author-name {
            display: flex;
            width: 300px;
            margin-left: 40px;
            color: #faf8f2;

            .article__category {
              padding-left: 5px;
              display: flex;
            }
            ul {
              margin-left: -40px;
              margin-top: 0;
              display: flex;
            }

            li {
              margin-left: 5px;
              list-style: none;
            }
          }
          strong {
            color: #faf8f2;
            font-weight: bold;
          }

          .date_time {
            margin-left: -80px;
            margin-top: -10px;
            color: #faf8f2;
          }
          .article__buttons {
            display: flex;

            .like__button {
              padding: 10px;
            }
            .share__button {
              padding: 10px;
            }
          }
          .article__image {
            position: absolute;
            top: 55vw;
            margin-left: 8vw;
            object-fit: cover;
            width: 85vw;
            height: 550px;
            z-index: 999;
          }

          .article__content-section {
            width: 100vw;
            height: auto;
            min-height: 100vh;
            padding-bottom: 80px;
            background-color: #faf8f2;
            justify-content: center;
            padding-top: 260px;
          }
          .article__content-text {
            width: 60vw;
            font-size: 26px;
            font-weight: 300;
            margin-top: 200px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
};

export default Article;

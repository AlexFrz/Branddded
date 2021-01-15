import React, { useEffect, useState } from "react";

// Sanity
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";

// Importations
import Logo from "../../components/Logo";
import GlobalStyles from "../../styles/GlobalStyles";
import HamburgerMenu from "../../components/HamburgerMenu";

// Next.js specifics
import Link from "next/link";
import Image from "next/image";
import TheFooter from "../../components/TheFooter";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Posts = (props) => {
  const { posts = [], categories = [] } = props;
  return (
    <>
      <GlobalStyles />
      <div className="header">
        <Link href="/">
          <Logo />
        </Link>
        <div className="unrotated">
          <HamburgerMenu />
        </div>
      </div>
      <div className="posts__header">
        <h1 className="posts__headline">We design for growth</h1>
        <p className="posts__subtitle">
          In this blog, we'll share what matter the most to us: design,
          programming and marketing. We hope it will help you to grow !
        </p>
        <span className="line"></span>
        <div className="categories">
          {categories.map((category) => (
            <li key={category} className="category">
              {category.title}
            </li>
          ))}
        </div>
        <div className="allpost">
          {" "}
          {posts.map(
            ({ _id, title = "", slug = "", _updatedAt = "", mainImage }) =>
              slug && (
                <li key={_id}>
                  <div className="onepost">
                    <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                      <img
                        src={urlFor(mainImage).width(1900).url()}
                        className="post__image"
                      />
                    </Link>
                    <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                      <a className="post__title">{title}</a>
                    </Link>
                  </div>
                </li>
              )
          )}
        </div>
      </div>
      <TheFooter />
      <style jsx>{`
        @font-face {
          font-family: "ZonaBlack";
          src: url("/fonts/Zona\ Black.ttf");
          font-weight: 900;
          font-style: normal;
        }

        .header {
          padding-left: 40px;
          padding-top: 50px;
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
        .posts__header {
          height: 100vh;
          width: 100vw;
          font-family: ZonaBlack;

          margin-top: 200px;
        }
        .posts__headline {
          font-size: 80px;
          color: #faf8f2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .categories {
          position: absolute;
          display: flex;
          margin-top: 100px;
          justify-content: space-evenly;
          width: 100vw;
          height: 200px;
        }
        .category {
          font-size: 30px;
          color: #faf8f2;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .posts__subtitle {
          margin: 0 auto;
          max-width: 80vw;
          font-family: "Poppins";
          font-size: 30px;
          color: #faf8f2;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .line {
          position: absolute;
          margin-top: 50px;
          background-color: #faf8f2;
          height: 2px;
          width: 100vw;
        }

        .allpost {
          position: absolute;
          display: flex;
          margin-top: 175px;
          display: flex;
          color: #e54446;
          justify-content: space-evenly;
          text-align: center;
          background-color: #faf8f2;
          padding-top: 75px;
          width: 100vw;
          margin-bottom: 400px;
        }
        li {
          list-style: none;
        }
        .onepost {
          width: 30vw;
          height: 400px;
          display: block;
        }
        .post__image {
          width: 100%;
          height: 200px;
          cursor: pointer;
        }
        .post__title {
          color: #1e1e1e;
          font-size: 28px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

Posts.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `),
  categories: await client.fetch(groq`*[_type == "category"]
  `),
});

export default Posts;

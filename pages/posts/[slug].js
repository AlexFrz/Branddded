import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import TheHeader from "../../components/TheHeader";
import Logo from "../../components/Logo";
import Article from "../../components/Article";

import GlobalStyle from "../../styles/globalStyles";
import HamburgerMenu from "../../components/HamburgerMenu";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Featured from "../../components/Featured";
import TheFooter from "../../components/TheFooter";

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    mainImage,
    authorImage,
    publishedAt,
    body = [],
  } = props;
  return (
    <>
      <GlobalStyle />
      <Article
        title={title}
        name={name}
        categories={categories}
        authorImage={authorImage}
        publishedAt={publishedAt}
        mainImage={mainImage}
        body={body}
      />

      <Featured />
      <TheFooter />
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "name": author->name,
  "categories": categories[]->title,
  mainImage,
  "authorImage": author->image,
  publishedAt,
  body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;

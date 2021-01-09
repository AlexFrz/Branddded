import React from "react";
import ArticleCard from "./ArticleCard";
import Image from "next/image";

function Featured() {
  return (
    <>
      <div className="featured__head">Discover more</div>
      <div className="featured_row">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <style jsx>{`
        .featured__head {
          padding: 40px;
          width: 100vw;
          display: flex;
          font-family: ZonaBlack;
          color: #faf8f2;
          font-size: 50px;
          justify-content: center;
        }
        .featured_row {
          display: flex;
          color: #faf8f2;
          justify-content: space-evenly;
          text-align: center;
          background-color: #e64445;
          width: 100vw;
          height: 400px;
        }
      `}</style>
    </>
  );
}

export default Featured;

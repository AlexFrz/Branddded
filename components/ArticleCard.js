import React from "react";
import Image from "next/image";

function ArticleCard() {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <Image src="/pantone.jpg" width={600} height={400} />
        </div>
        <h1 className="card__title">A dummy title</h1>
        <p className="card__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quis quos, aliquam atque neque quaerat?
        </p>
      </div>
      <style jsx>{`
        .card {
          font-family: ZonaBlack;
          color: #faf8f2;
          width: 30vw;
          height: 400px;
        }
        .card__image {
          width: 100%;
          height: 200px;
        }
        .card__title {
          margin-top: 75px;
        }
      `}</style>
    </>
  );
}

export default ArticleCard;

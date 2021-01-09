import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <h3 className="logo__branddded">Branddded</h3>
      </Link>
      <style jsx>
        {`
          .logo__branddded {
            font-family: ZonaBlack;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Logo;

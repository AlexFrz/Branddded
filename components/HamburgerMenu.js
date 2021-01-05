import React from "react";

function HamburgerMenu() {
  return (
    <div className="hamburgermenu">
      <button>
        <span></span>
        <span></span>
      </button>

      <style jsx>
        {`
          button {
            transform-origin: center;
            border: none;
            background: none;
            transform: rotate(90deg);
          }

          button span {
            width: 36px;
            height: 8px;
            display: block;
            margin: 8px;
            background-color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default HamburgerMenu;

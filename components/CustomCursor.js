import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.text};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
`;

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ y: 400, x: 400 });

  const [reverseX, setReverseX] = useState(Math.abs(mousePosition.x) * -1);
  const onMouseMove = (event) => {
    const { pageX: y, pageY: x } = event;
    setMousePosition({ y, reverseX });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });
  return (
    <>
      <Cursor
        style={{
          left: `${mousePosition.reverseX}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
}

export default CustomCursor;

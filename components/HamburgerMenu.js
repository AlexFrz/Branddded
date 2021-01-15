import React from "react";
import { device } from "../styles/device";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 3rem;
  display: flex;
  z-index: 999;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  transform: rotate(90deg);
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default HamburgerMenu;

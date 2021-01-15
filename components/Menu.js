import styled from "styled-components";
import Link from "next/link";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #faf8f2;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")}
    rotate(90deg);

  height: 100vh;
  text-align: left;
  width: 500px;
  padding: 2rem;
  position: absolute;
  top: -200px;
  left: 132px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    margin-left: 120px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #e64445;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/posts">Our blog</Link>
      <Link href="/">Our mission</Link>
      <Link href="/">Contact</Link>
    </StyledMenu>
  );
};

export default Menu;

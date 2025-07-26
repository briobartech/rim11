import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";


function Banner() {
  
  return (
    <StyledBanner $themeData={useContext(AppContext).themeData}>
      <img src={"img/banner.webp"} alt="Banner" />
    </StyledBanner>
  );
}

export default Banner;
const StyledBanner = styled.div`
  position: relative;
  width: 100%
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 60%,
      ${({ $themeData }) => $themeData.background}  100%
    );
  }

  @media (max-width: 480px) {
img {
width: 100%;
  height: 200px; /* o el valor que quieras */
  object-fit: cover;
}
}
`;

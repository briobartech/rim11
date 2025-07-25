import styled from "styled-components";
import { contactData, texts } from "../assets/text.js";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";
import Title from "./title.jsx";
import NavBar from "./navbar.jsx";

function InfoPage() {
  return (
    <>
      <InfoPageStyled
        $textStyle={useContext(AppContext).textStyle}
        $themeData={useContext(AppContext).themeData}
      >
        <div className="info-page-c">
          <Title />
          <div className="title">
            Regimiento de Infanteria de Montaña 11 "General Las Heras"
          </div>
          <div className="info-page">
            <p>{texts.info}</p>
          </div>
          <NavBar />
        </div>
      </InfoPageStyled>
    </>
  );
}

export default InfoPage;

const InfoPageStyled = styled.div`
  .title {
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size4"]};
    color: ${({ $themeData }) => $themeData.subtitle};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px #0001;
    text-shadow: 3px 3px 8px ${({ $themeData }) => $themeData.text2};
    padding-bottom: 36px;
  }
  .info-page-c {
    width: 100%;
    max-width: 1080px;
    background-color: ${({ $themeData }) => $themeData.background};
    color: ${({ $themeData }) => $themeData.text1};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    margin: 0 auto;
  }

  .info-page {
    position: relative;
    background-image: url("img/info-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 96px;
  }

  .info-page::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $themeData }) => $themeData.background};
    opacity: 0.7;
    border-radius: 8px;
    z-index: 1;
    pointer-events: none;
    
  }

  .info-page p {
    position: relative;
    z-index: 2;
    height: 100%;
    overflow-y: auto;
    
    color: ${({ $themeData }) => $themeData.text1};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size3"]};
    font-weight: ${({ $textStyle }) => $textStyle.content["font-weight"]};
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    line-height: ${({ $textStyle }) => $textStyle.content["line-height"]};
    text-align: center;
    border-radius: 8px;
    
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 85%,

      ${({ $themeData }) => $themeData.background} 100%
    );
  }
  @media (max-width: 768px) {
  
  .title {
    font-size: ${({ $textStyle }) => $textStyle.content["font-size3"]};
    text-align: left;
    padding-inline-start: 16px; /* sangría interna sin romper layout */
    box-sizing: border-box;
  }

  .home-content {
    padding: 0 10px;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
  }

  .app-container {
    padding: 0 10px;
    max-width: 100%;
    max-height: none;
    position: relative;
    box-sizing: border-box;
  }

  .text-content {
    padding: 5%;
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
    text-indent: 24px;
  }

  .sub-title {
    font-size: ${({ $textStyle }) => $textStyle.content["font-size5"]};
    padding-left: 20px;
    text-align: left; /* mejor que center para subtítulo */
  }

  .info-page p {

  padding-bottom: 160px;
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
}

 @media (max-width: 480px) {
.title {
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
    width: 100%;
    text-align: center;
    text-align: left; /* mejor que center para subtítulo */
  }
.info-page p {
font-size: calc(${({ $textStyle }) => $textStyle.content["font-size1"]} + .5em);
}
 
`;

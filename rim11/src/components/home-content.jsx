import styled from "styled-components";
import { texts } from "../assets/text.js";
import Title from "./title.jsx";
import Banner from "./banner.jsx";
import NavBar from "./navbar.jsx";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

function HomeContent() {
  return (
    <HomeContentStyled
      $textStyle={useContext(AppContext).textStyle}
      $themeData={useContext(AppContext).themeData}
    >
      <div className="home-content">
        <div className="app-container">
          <div className="app-header">
            <Title />
            <Banner />
          </div>
          <h2 className="sub-title">Bienvenido al Rim11 APP</h2>
          <p className="text-content">
            {texts.home[useContext(AppContext).languaje]}
          </p>
          <NavBar />
        </div>
      </div>
    </HomeContentStyled>
  );
}

export default HomeContent;

const HomeContentStyled = styled.div`
    background-color: ${({ $themeData }) => $themeData.background};
   width: 100%;
    height: 100vh;
    .home-content {
    width: 100%;
    height: 100vh;

    max-width: 1080px;
    max-height: 1920px;
    margin: 0 auto;
  

}
 .app-container{
    width: 100%;
    height: 100vh;

    max-width: 1080px;
    max-height: 1920px;
    background-color: ${({ $themeData }) => $themeData.background};
      display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between;
    }
 .text-content{
    background-color: ${({ $themeData }) => $themeData.background};
    color: ${({ $themeData }) => $themeData.text1};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
    font-weight: ${({ $textStyle }) => $textStyle.content["font-weight"]};
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    line-height: ${({ $textStyle }) => $textStyle.content["line-height"]};
    padding: 0 5%;
    min-height: 300px;
    text-indent: 56px;
    padding-top: 0;
  }
  .sub-title {
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size4"]};
    font-weight: ${({ $textStyle }) => $textStyle.content["font-weight"]};
    color: ${({ $themeData }) => $themeData.text2};
    margin: 20px 0;
    text-align: left;
  text-indent: 32px;
    width: 100%;
    
  }

  .app-container {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    background-color: ${({ $themeData }) => $themeData.background};
  }

  @media (max-width: 480px) {

  .app-header{
  width: 100%;}
.sub-title { font-size: calc(
        ${({ $textStyle }) => $textStyle.content["font-size3"]} - 0.5em
      );
    }
    .text-content {
      font-size: calc(
        ${({ $textStyle }) => $textStyle.content["font-size2"]} - 0.7em
      );
      text-indent: 16px;
    }
  }

  @media (max-width: 768px) {
    
}
}
`;

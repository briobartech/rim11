import styled from "styled-components";
import { texts } from "../assets/text.js";
import Title from "./title.jsx";
import Banner from "./banner.jsx";
import NavBar from "./navbar.jsx";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

function HomeContent() {
  return (
    <HomeContentStyled  $textStyle={useContext(AppContext).textStyle} $themeData={useContext(AppContext).themeData}>
      <div className="home-content">
        <div className="app-container">
          <div className="app-header">
            <Title />
            <Banner />
          </div>
          <h2 className="sub-title">Bienvenido al Rim11 APP</h2>
          <p  className="text-content">{texts.home[useContext(AppContext).languaje]}</p>
          <NavBar />
        </div>
      </div>
    </HomeContentStyled>
  );
}

export default HomeContent;

const HomeContentStyled = styled.div`
    background-color: ${({ $themeData }) => $themeData.background};
    height: 100vh;
    width:100%;
    max-width:1080px;
    

 .app-container{
    width:100%;
    max-width:1080px;
    background-color: ${({ $themeData }) => $themeData.background};
    height: 700px;
    }
 .text-content{
    background-color: ${({ $themeData }) => $themeData.background};
    color: ${({ $themeData }) => $themeData.text3};
    font-size: ${({$textStyle}) => $textStyle.content['font-size']};
    font-weight: ${({$textStyle}) => $textStyle.content['font-weight']};
    font-family: ${({$textStyle}) => $textStyle.content['font-family']};
    line-height: ${({$textStyle}) => $textStyle.content['line-height']};
    padding: 10%;
    min-height: 300px;
    text-indent: 56px;
  }
  .sub-title {
    font-family: "Jockey One", sans-serif;
    font-size: 3em;
    font-weight: 400;
    color: ${({ $themeData }) => $themeData.text2};
    margin: 20px 0;
  }
  .home-content {
    width: 1080px;
    
    
  }
  .home-content p {
    color: ${({ $themeData }) => $themeData.text3};
    font-size: 2em;
    font-weight: 400;
    font-family: "Jockey One", sans-serif;
  }
  .app-container {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: ${({ $themeData }) => $themeData.background};
  }
}
`;

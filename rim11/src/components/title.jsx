import { styled } from "styled-components";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

function Title() {
  return (
    <StyledTitle
      $textStyle={useContext(AppContext).textStyle}
      $themeData={useContext(AppContext).themeData}
    >
      <div className="title-container">
        <h1>Rim11</h1>
      </div>
    </StyledTitle>
  );
}
export default Title;
const StyledTitle = styled.div`
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: ${({ $themeData }) => $themeData.background};
  }
  .title-container h1 {
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size5"]};

    color: ${({ $themeData }) => $themeData.title};
  }
  @media (max-width: 768px) {
  .title-container {
    height: 80px;}
    .title-container h1 {
      font-size: ${({ $textStyle }) => $textStyle.content["font-size4"]};
    }
  }

  @media (max-width: 4080px) {
.title-container {
    height: 60px;}
    .title-container h1 {
      font-size: ${({ $textStyle }) => $textStyle.content["font-size3"]};
    }
}
`;

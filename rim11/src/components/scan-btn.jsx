import styled from "styled-components";
import { themeData } from "../assets/colors.js";
import QRCodeIcon from "./qr-icon.jsx";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

function ScanButton() {
  return (
    <StyledScanButton $themeData={useContext(AppContext).themeData}>
      <div className="tour-btn">
        <div className="corners">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
        </div>
        <QRCodeIcon
          className="qr-bg"
          
          color={useContext(AppContext).themeData.background2}
        />
        <div className="tour-text">TOUR</div>
      </div>
    </StyledScanButton>
  );
}

export default ScanButton;

const StyledScanButton = styled.div`
z-index: 1;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 50%);

  .tour-btn {
    width: 190px;
    height: 190px;
    background: #d3d3d3;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 4px 24px #0002;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .corners {
    position: absolute;
    width: 70%;
    height: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2;
  }

  .corner {
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid ${({ $themeData }) => $themeData.background2};
    border-radius: 0;
  }

  .corner.tl {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 16px;
  }
  .corner.tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 16px;
  }
  .corner.bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 16px;
  }
  .corner.br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 16px;
  }

  .tour-text {
    position: relative;
    z-index: 3;
    font-size: 2em;
    font-family: sans-serif;
    color: ${({ $themeData }) => $themeData.background2};
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
    background: #d3d3d3;
    padding: 0.2em 0.2em;
    
    box-shadow: 0 0 8px #d3d3d3;
  }

  .qr-bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
    width: 120px;
    height: 120px;
  }

  @media (max-width: 768px) {
     
     .tour-btn {
    width: 160px;
    height: 160px;
     }
    .tour-text {
    width: 100%;
    font-size: 1.5em;}
    .corner {
    position: absolute;
    width: 32px;
    height: 32px;}
    .qr-bg {
    width: 96px;
    height: 96px;}
}

@media (max-width: 480px) {
     
     .tour-btn {
    width: 120px;
    height: 120px;
     }
    .tour-text {
    width: 100%;
    font-size: 1.2em;}
    .corner {
    position: absolute;
    width: 24px;
    height: 24px;
        border: 3px solid ${({ $themeData }) => $themeData.background2};
}
    .qr-bg {
    width: 64px;
    height: 64px;}
    
}
    
`;


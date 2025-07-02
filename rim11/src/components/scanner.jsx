import styled, { keyframes } from "styled-components";
import QrScanner from "react-qr-barcode-scanner";
import { themeData2 } from "../assets/colors";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";
import { images } from "../assets/sources.js";
const colors = themeData2;

function Scanner() {
  const qrManager = useContext(AppContext);


  if (images[qrManager.qrData]) {
    return `Resultado: ${qrManager.qrData}`;
  } else if (qrManager.qrData === "") {
    return (
      <StyledScanner>
        <div className="scanner-container">
          <Frame>
            <RedLine />
            <CornerFrame>
              <Corner className="tl" />
              <Corner className="tr" />
              <Corner className="bl" />
              <Corner className="br" />
            </CornerFrame>
            <QrScanner
              onUpdate={(err, result) => {
                if (result) qrManager.handleScan(result);
                if (err) qrManager.handleError(err);
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </Frame>
          <Result>{"Escanea un código QR"}</Result>
        </div>
      </StyledScanner>
    );
  } else {
    return "Código QR no encontrado";
  }
}
export default Scanner;

const StyledScanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  

  .scanner-container {
    background-color: ${colors.background};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

const Frame = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Fuerza el video y canvas a ser cuadrados y cubrir el frame */
  video,
  canvas {
    width: 80% !important;
    height: 80% !important;
    object-fit: cover !important;
    aspect-ratio: 1 / 1;
    background: #000;
    display: block;
  }
`;

const CornerFrame = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 3;
`;

const Corner = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border: 4px solid #fff;

  &.tl {
    top: ;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 16px;
  }
  &.tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 16px;
  }
  &.bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 16px;
  }
  &.br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 16px;
  }
`;

const scanLine = keyframes`
  0% { top: 10px; }
  100% { top: calc(100% - 10px); }
`;

const RedLine = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  height: 3px;
  background: red;
  border-radius: 2px;
  z-index: 2;
  animation: ${scanLine} 1.5s linear infinite alternate;
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
`;

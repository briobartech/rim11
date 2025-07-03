import styled, { keyframes } from "styled-components";
import QrScanner from "react-qr-barcode-scanner";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";
import { images } from "../assets/sources.js";

function Scanner() {
  const qrManager = useContext(AppContext);

  if (images[qrManager.qrData]) {
    return `Resultado: ${qrManager.qrData}`;
  } else if (qrManager.qrData === "") {
    return (
      <>
        <StyledScanner $themeData={useContext(AppContext).themeData}>
          <div className="scanner-container">
            <Frame>
              <RedLine />
              <CornerFrame>
                <Corner
                  className="tl"
                  $themeData={useContext(AppContext).themeData}
                />
                <Corner
                  className="tr"
                  $themeData={useContext(AppContext).themeData}
                />
                <Corner
                  className="bl"
                  $themeData={useContext(AppContext).themeData}
                />
                <Corner
                  className="br"
                  $themeData={useContext(AppContext).themeData}
                />
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
        <StyledInstructions $textStyle={useContext(AppContext).textStyle}>
          <p>
            1: Acepta los permisos para acceder a tú cámara
          </p>
          <p>
            2: Apunta a un código QR: Coloca el código QR dentro del visor de la cámara.
          </p>
          <p>
            3: Reconocimiento automático: Tu dispositivo (Android o iPhone) reconocerá el código QR y mostrará el contenido.
          </p>
        </StyledInstructions>
      </>
    );
  } else {
    return (<>
    "Código QR no encontrado";
    <button onClick={()=> qrManager.setQrData("")}>
      Probar de nuevo
    </button>
    </>)

  }
}
export default Scanner;

const StyledInstructions = styled.div`
padding: 10%;
font-size:  ${({$textStyle}) => $textStyle.content['font-size']};
line-height: ${({$textStyle}) => $textStyle.content['line-height']};
font-family: ${({$textStyle}) => $textStyle.content['font-family']};
max-width: 1080px`;

const StyledScanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;

  .scanner-container {
    background-color: ${({ $themeData }) => $themeData.background};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 1080px;
    max-height: 100%;
    position: relative;
  }
`;

const Frame = styled.div`
  position: relative;
  width: 512px;
  height: 512px;
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
  width: 128px;
  height: 128px;
  box-sizing: border-box;
  border: 12px solid ${({ $themeData }) => $themeData.accent};

  &.tl {
    top: ;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 32px;
  }
  &.tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 32px;
  }
  &.bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 32px;
  }
  &.br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 32px;
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
  height: 12px;
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

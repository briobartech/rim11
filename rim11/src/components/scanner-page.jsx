import styled from "styled-components";
import Scanner from "./scanner";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScannedContent from "./scanned-content";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

import NavBar from "./navbar";

function ScannerPage() {
  const qrManager = useContext(AppContext);

  const handleScan = (data) => {
    console.log(useContext(AppContext).datos[data] ? true : false);
    return useContext(AppContext).datos[data] ? true : false;
  };

  return (
    <>
      <StyledScannerPage $themeData={useContext(AppContext).themeData}>
        <div className="nav-bar">
          {handleScan(qrManager.qrData) ? (
            <li>
              <Link to="/scanner" onClick={() => qrManager.setQrData("")}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </li>
          ) : (
            <></>
          )}
          
        </div>
        <div className="scanner-container">
          {handleScan(qrManager.qrData) ? (
            <ScannedContent id={qrManager.qrData} />
          ) : (
            <Scanner></Scanner>
          )}
        </div>
        <NavBar></NavBar>
      </StyledScannerPage>
    </>
  );
}
export default ScannerPage;

const StyledScannerPage = styled.div`
width: 100%;
max-width:1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $themeData }) => $themeData.background};
  margin: 0 auto;
  .nav-bar li svg {
    font-size: 32px;
  }
  .nav-bar {
    display: flex;
    width: 100%;
    height: 64px;
    background-color: ${({ $themeData }) => $themeData.background};
  }
  .nav-bar li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
  }
  .scanner-container {
    width: 100%;
    max-width:1080px;
    background-color: ${({ $themeData }) => $themeData.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .nav-bar a {
    color: ${({ $themeData }) => $themeData.icons};
    text-decoration: none;
  }
  .nav-bar a:visited {
    color: ${({ $themeData }) => $themeData.icons};
  }
  .nav-bar a:active {
    color: ${({ $themeData }) => $themeData.icons};
  }
  .nav-bar a:hover {
    color: ${({ $themeData }) =>
      $themeData.text1}; /* o el color que prefieras al pasar el mouse */
  }
`;

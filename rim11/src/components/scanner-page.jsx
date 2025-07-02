import styled from "styled-components";
import { themeData2 } from "../assets/colors";
import Scanner from "./scanner";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScannedContent from "./scanned-content";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";
import { images } from "../assets/sources.js";
import NavBar from "./navbar";
const colors = themeData2;

function ScannerPage() {
  const qrManager = useContext(AppContext);

  const handleScan = (data) => {
    console.log(images[data] ? true : false);
    return images[data] ? true : false;
  };

  return (
    <>
      <StyledScannerPage>
        <div className="nav-bar">
          {" "}
          <li>
            <Link to="/scanner" onClick={() => qrManager.setQrData("")}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </li>
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
  .nav-bar li svg {
    font-size: 32px;
  }
  .nav-bar {
    display: flex;
    width: 100%;
    height: 64px;
    background-color: ${colors.background};
  }
  .nav-bar li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
  }
  .scanner-container {
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
  }
`;

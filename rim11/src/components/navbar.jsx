import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScanButton from "./scan-btn.jsx";
import { useContext, useState } from "react";
import { AppContext } from "./app-context.jsx";
import MenuPage from "./menu-page.jsx";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledNavBar $themeData={useContext(AppContext).themeData}>
      <div className="navbar-box">
        <ul className="navbar-list">
          <li>
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>

          <li className="scan-btn">
            <Link to="/scanner">
              <ScanButton />
            </Link>
          </li>
          <li>
            <Link to="/info">
              <FontAwesomeIcon icon={faCircleInfo} />
            </Link>
          </li>
          <li>
            <span
              onClick={() => setShowMenu(!showMenu)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </span>
          </li>
        </ul>
        {showMenu && <MenuPage onClose={() => setShowMenu(false)} />}
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
const StyledNavBar = styled.div`
z-index: 3;
width: 100%;  
background-color: ${({ $themeData }) => $themeData.background};
.navbar-list li svg {
    font-size: 64px;
  }
  .navbar-box {
    width: 100%;
    height: 128px;
    );
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;
  }
  .navbar-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    color: ${({ $themeData }) => $themeData.icons};
  }
  .scan-btn{
  position: relative;
  bottom: 40px;
  }

   .navbar-list a {
    color: ${({ $themeData }) => $themeData.icons};
    text-decoration: none;
  }
  .navbar-list a:visited {
    color: ${({ $themeData }) => $themeData.icons};
  }
  .navbar-list a:active {
    color: ${({ $themeData }) => $themeData.icons};
  }
  .navbar-list a:hover {
    color: ${({ $themeData }) =>
      $themeData.text1}; /* o el color que prefieras al pasar el mouse */
  }
     @media (max-width: 768px) {
     
     .navbar-list li svg {

    font-size: 48px;}
     }
     @media (max-width: 480px) {
     .navbar-box {
    
    height: 96px;
} 
     .navbar-list li svg {
    font-size: 32px;}
     }

`;

// TODO: Implementar el widget de menu
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AppContext } from "./app-context.jsx";

function MenuPage({ onClose }) {
  return (
    <MenuStyled
      $textStyle={useContext(AppContext).textStyle}
      $themeData={useContext(AppContext).themeData}
    >
      <div className="menu-nav-bar">
        <li onClick={onClose}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </li>
        <li
          className="languaje-btn"
          onClick={useContext(AppContext).setLanguaje}
        >
          {(() => {
            switch (useContext(AppContext).languaje) {
              case "spanish":
                return "Español";
              case "english":
                return "English";
              case "portugues":
                return "Português";
              default:
                return "Idioma no reconocido";
            }
          })()}
        </li>
      </div>
      <MenuOptionsStyled
        $textStyle={useContext(AppContext).textStyle}
        $themeData={useContext(AppContext).themeData}
      >
        <ul className="menu-options">
          <li onClick={useContext(AppContext).handleThemeChange}>
            {useContext(AppContext).themeData.name}
          </li>
          <li>Opción 2</li>
          <li>Opción 3</li>
          <li>Opción 4</li>
        </ul>
      </MenuOptionsStyled>
    </MenuStyled>
  );
}

export default MenuPage;

const MenuStyled = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 36%;
  background: ${({ $themeData }) => $themeData.background};
  border: 1px solid #ccc;
  z-index: 4;

  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  li svg {
    font-size: 64px;
    position: relative;
    left: 32px;
    padding: 2%;
    color: ${({ $themeData }) => $themeData.text1};
    background: ${({ $themeData }) => $themeData.background};
  }
  li:hover {
    background: ${({ $themeData }) => $themeData.background};
  }

  .languaje-btn {
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
    color: ${({ $themeData }) => $themeData.text1};
    width: 240px;
    border: 5px solid ${({ $themeData }) => $themeData.text1};
    border-radius: 32px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: capitalize;
  }
  .languaje-btn::first-letter {
    text-transform: uppercase;
  }
  .menu-nav-bar {
    padding-top: 32px;
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    li svg {
      font-size: 32px;
    }
    .languaje-btn {
      width: 160px;
      font-size: calc(
        ${({ $textStyle }) => $textStyle.content["font-size1"]} + 0.5em
      );
    }
    
  }
`;
const MenuOptionsStyled = styled.div`
  .menu-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 32px;
    width: 90%;
    height: 260px; /* Ajusta según el alto que desees */
    margin: 40px auto 0 auto;
    padding: 0;
    list-style: none;
    justify-items: stretch;
    align-items: stretch;
  }

  .menu-options li {
    background: ${({ $themeData }) => $themeData.secondary};
    color: ${({ $themeData }) => $themeData.text1};
    font-size: ${({ $textStyle }) => $textStyle.content["font-size2"]};
    font-family: ${({ $textStyle }) => $textStyle.content["font-family"]};
    border-radius: 20px;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s;
    border: 2px solid ${({ $themeData }) => $themeData.text1};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }


  @media (max-width: 480px) {
.menu-options {
margin: 20px auto 0 auto;
height: 160px; /* Ajusta según el alto que desees */
}
  .menu-options li {
  height: 80px;
  font-size: calc(
        ${({ $textStyle }) => $textStyle.content["font-size1"]} + 0.8em
      );
  }

`;

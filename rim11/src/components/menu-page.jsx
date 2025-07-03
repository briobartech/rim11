// TODO: Implementar el widget de menu
import styled from 'styled-components'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { AppContext } from './app-context'

function MenuPage ({ onClose }) {
  return (
    <MenuStyled $themeData={useContext(AppContext).themeData}>
      <div className='menu-nav-bar'>
        <li onClick={onClose}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </li>
        <li
          className='languaje-btn'
          onClick={useContext(AppContext).setLanguaje}
        >
          {useContext(AppContext).languaje}
        </li>
      </div>
      <MenuOptionsStyled $textStyle={useContext(AppContext).textStyle} $themeData={useContext(AppContext).themeData}>
        <ul className='menu-options'>
          <li>Cambiar color</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
          <li>Opción 4</li>
        </ul>
      </MenuOptionsStyled>
    </MenuStyled>
  )
}

export default MenuPage

const MenuStyled = styled.div`
  position: absolute;
  bottom: 128px;
  right: 0;
  width: 100%;
  width: 1080px;
  height: 36%;
  background: ${({ $themeData }) => $themeData.background};
  border: 1px solid #ccc;
  z-index: 0;
  
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
  li:hover,
  active {
    background: ${({ $themeData }) => $themeData.background};
  }
  .languaje-btn {
    font-size: 2em;
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
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
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
    font-size: 2em;
    font-family: ${({$textStyle}) => $textStyle.content['font-family']}; 
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

  .menu-options li:hover {
    background: ${({ $themeData }) => $themeData.accent};
    color: ${({ $themeData }) => $themeData.background};
  }
`
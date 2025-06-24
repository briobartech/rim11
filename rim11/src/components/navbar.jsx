import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleInfo, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { themeData } from '../assets/colors.js';

function NavBar () {
  return (
    <StyledNavBar>
    <div className='navbar-box'>
      <ul className='navbar-list'>
        <li><FontAwesomeIcon icon={faHouse} /></li>
        <li><FontAwesomeIcon icon={faUser} /></li>
        <li>Tour</li>
        <li><FontAwesomeIcon icon={faCircleInfo} /></li>
        <li><FontAwesomeIcon icon={faBars} /></li>
      </ul>
    </div>
    </StyledNavBar>
  )
}

export default NavBar
const StyledNavBar = styled.div`
.navbar-box{
    width: 1080px;
    height: 60px;
    background-color: ${themeData.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;
}
.navbar-list{
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: space-around;
    width: 100%;
}
`
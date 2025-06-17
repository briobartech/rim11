import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleInfo, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

function NavBar () {
  return (
    <StyledNavBar>
    <div className='navbar-box'>
      <ul>
        <li>   <FontAwesomeIcon icon={faHouse} /></li>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`
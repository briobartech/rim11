import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCircleInfo,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { themeData2 } from '../assets/colors.js'
import { Link } from 'react-router-dom';
import ScanButton from './scan-btn.jsx'
const colors = themeData2

function NavBar () {
  return (
    <StyledNavBar>
      <div className='navbar-box'>
        <ul className='navbar-list'>
          <li>
           <Link to="/"> <FontAwesomeIcon icon={faHouse} /></Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>

          <li className='scan-btn'><Link to="/scanner"><ScanButton/></Link></li>
          <li>
            <FontAwesomeIcon icon={faCircleInfo} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
    </StyledNavBar>
  )
}

export default NavBar
const StyledNavBar = styled.div`
.navbar-list li svg {
    font-size: 64px;
  }
  .navbar-box {
    width: 1080px;
    height: 128px;
    background-color: ${colors.secondary};
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
    color: ${colors.icons};
  }
  .scan-btn{
  position: relative;
  bottom: 40px;
  }
`

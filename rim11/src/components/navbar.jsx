import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleInfo, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar () {
  return (
    <div>
      <ul>
        <li>   <FontAwesomeIcon icon={faHouse} /></li>
        <li><FontAwesomeIcon icon={faUser} /></li>
        <li>Tour</li>
        <li><FontAwesomeIcon icon={faCircleInfo} /></li>
        <li><FontAwesomeIcon icon={faBars} /></li>
      </ul>
    </div>
  )
}

export default NavBar

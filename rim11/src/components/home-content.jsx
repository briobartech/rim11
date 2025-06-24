import styled from 'styled-components'
import { texts } from '../assets/text.js'
import { themeData } from '../assets/colors.js'
import Title from './title.jsx'
import Banner from './banner.jsx'
import NavBar from './navbar.jsx'

const colors = themeData

function HomeContent () {
  return (
    <HomeContentStyled>
      <div className='home-content'>
        <div className='app-container'>
          <div className='app-header'>
            <Title props='Rim11' />
            <Banner />
          </div>
          <h2 className='sub-title'>Bienvenido al Rim11 APP</h2>
          <p>${texts.home}</p>
          <NavBar />
        </div>
      </div>
    </HomeContentStyled>
  )
}

export default HomeContent

const HomeContentStyled = styled.div`
  .sub-title {
    font-family: 'Jockey One', sans-serif;
    font-size: 3em;
    font-weight: 400;
    color: ${colors.text2};
    margin: 20px 0;
  }
  .home-content {
    width: 960px;
    margin: 50px;
  }
  .home-content p {
    color: ${colors.text1};
    font-size: 2em;
    font-weight: 400;
    font-family: 'Jockey One', sans-serif;
  }
`

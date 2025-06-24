import Banner from './components/banner.jsx'
import NavBar from './components/navbar.jsx'
import styled from 'styled-components'
import HomeContent from './components/home-content.jsx'
import { themeData2 } from './assets/colors.js'
import Title from './components/title.jsx'
const color = themeData2
function App () {
  return (
    <>

      <AppStyled>
        <div className='app-container'>
          <div className='app-header'>
            <Title props='Rim11' />
            <Banner />
            <HomeContent />
          </div>

          <NavBar />
        </div>
      </AppStyled>
    </>
  )
}

export default App

const AppStyled = styled.div`
  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 1080px;
    margin: 0 auto;
  }
  .app-container {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 1920px;
    background-color: ${color.background};
  }
`

import Banner from './components/banner.jsx'
import NavBar from './components/navbar.jsx'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScannerPage from './components/scanner-page.jsx'
import HomeContent from './components/home-content.jsx'
import InfoPage from './components/info-page.jsx'
import ContactPage from './components/contact-page.jsx'
import { useContext } from 'react'
import { AppContext } from './components/app-context.jsx'


function App () {
  return (
    <>
      <AppStyled $themeData={useContext(AppContext).themeData}>
        <BrowserRouter>
          <Routes>
            <Route path='/rim11' element={<HomeContent />} />
            <Route path='/scanner' element={<ScannerPage />} />
            <Route path='/info' element={<InfoPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
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
    width:100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  .app-container {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 
    background-color: ${({$themeData}) => $themeData.background};
  }
`

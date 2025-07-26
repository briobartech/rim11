import Banner from './components/banner.jsx'
import NavBar from './components/navbar.jsx'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
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
        <HashRouter basename="/" >
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/scanner' element={<ScannerPage />} />
            <Route path='/info' element={<InfoPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </HashRouter>
      </AppStyled>
    </>
  )
}

export default App

const AppStyled = styled.div`
    
`

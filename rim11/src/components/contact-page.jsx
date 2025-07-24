import styled from 'styled-components'
import { contactData } from '../assets/text.js'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './app-context.jsx'
import Title from './title.jsx'
import NavBar from './navbar.jsx'
function ContactPage () {
  const [data, setData] = useState(null)

  useEffect(() => {
    contactData.then(data => setData(data))
  }, [])

  return (
    <>
      <ContactPageStyled
        $textStyle={useContext(AppContext).textStyle}
        $themeData={useContext(AppContext).themeData}
      >
        <div className='contact-page-content'>
          <Title></Title>
          <div className='contact-page-container'>
            <div className='title'>Información de contacto</div>
            {data
              ? Object.entries(data).map(([key, value]) => (
                  <div className='contact-info' key={key}>
                    <p className='item' key={key}>
                      {key}:
                    </p> 
                    <p className='value' key={value}>
                     {value}
                    </p>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
        <NavBar />
      </ContactPageStyled>
    </>
  )
}

export default ContactPage

const ContactPageStyled = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $themeData }) => $themeData.background};
    .contact-info {
    display: flex;
    flex-direction: row;}
  .contact-page-content {
    background: ${({ $themeData }) => $themeData.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .contact-page-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 90%;
    max-width: 1080px;

  }
  .title {
    font-family: ${({ $textStyle }) => $textStyle.content['font-family']};
    font-size: ${({ $textStyle }) => $textStyle.content['font-size4']};
    font-weight: ${({ $textStyle }) => $textStyle.content['font-weight']};
    color: ${({ $themeData }) => $themeData.subtitle};
    padding-top: 48px;
    padding-bottom: 96px;
    box-shadow: 0 4px 8px #0001;
    text-shadow: 3px 3px 8px ${({ $themeData }) => $themeData.text3}4;
  }
    .contact-info {
    display: flex;
    flex-direction: column;
    
   }
  .contact-info p {
    margin: 20px;
  }
  .contact-info .item {
    font-family: ${({ $textStyle }) => $textStyle.content['font-family']};
    font-size: ${({ $textStyle }) => $textStyle.content['font-size4']};
    font-weight: ${({ $textStyle }) => $textStyle.content['font-weight']};
    color: ${({ $themeData }) => $themeData.text1};
    
  }
    .contact-info .value {
    font-family: ${({ $textStyle }) => $textStyle.content['font-family']};
    font-size: ${({ $textStyle }) => $textStyle.content['font-size4']};
    font-weight: ${({ $textStyle }) => $textStyle.content['font-weight']};
    color: ${({ $themeData }) => $themeData.text2};
    
  }
    .item::first-letter {
    text-transform: capitalize;}
`

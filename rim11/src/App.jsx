import styled from 'styled-components'

function App () {
  return (
    <StyledBG>
      <div className='title'>
        <h1>RIM11</h1>
        <div className='banner-box'>
          <img
            className='banner'
            src='src\assets\img\banner.webp'
            alt=''
            srcset=''
          />
        </div>
      </div>
    </StyledBG>
  )
}

export default App

const StyledBG = styled.div`
  .title {
    background-color: #f5aa45;
    width: 1080px;
    height: 100vh;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .title h1 {
    font-family: 'Jockey One', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 2em;
    padding: 20px;
    color: #04344a;
    margin: 0 auto;
  }
  .banner-box {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      #f5aa45
    );
  }
  .banner {
    background-color: #04344a;
    width: 1080px;
  }
`

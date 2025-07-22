import { styled } from 'styled-components'
import { useContext } from 'react'
import { AppContext } from './app-context.jsx'

function Title () {
  return (
    <StyledTitle $themeData={useContext(AppContext).themeData}>
      <div className="title-container">
        <h1>Rim11</h1>
      </div>
    </StyledTitle>
  )
}
export default Title
const StyledTitle = styled.div`
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: ${({$themeData}) => $themeData.background};
}
  font-family: 'Jockey One', sans-serif;
  font-size: 4em;

  color: ${({$themeData}) => $themeData.title};
 
`

import { styled } from 'styled-components'
import { useContext } from 'react'
import { AppContext } from './app-context.jsx'

function Title () {
  return (
    <StyledTitle $textStyle={useContext(AppContext).textStyle} $themeData={useContext(AppContext).themeData}>
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
  font-family: ${({$textStyle}) => $textStyle.content['font-family']};
  font-size: ${({$textStyle}) => $textStyle.content['font-size5']};

  color: ${({$themeData}) => $themeData.title};
 
`

import { styled } from 'styled-components'
import { useContext } from 'react'
import { AppContext } from './app-context.jsx'

function Title () {
  return (
    <StyledTitle $themeData={useContext(AppContext).themeData}>
      <h1>Rim11</h1>
    </StyledTitle>
  )
}
export default Title
const StyledTitle = styled.div`
  font-family: 'Jockey One', sans-serif;
  font-size: 4em;
  padding: 20px;
  color: ${({$themeData}) => $themeData.title};
`

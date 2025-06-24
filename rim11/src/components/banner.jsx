import styled from 'styled-components'
import { themeData } from '../assets/colors'
const color = themeData
function Banner () {
  return (
    <StyledBanner>
      <img src='src\assets\img\banner.webp' alt='Banner' />
    </StyledBanner>
  )
}
export default Banner
const StyledBanner = styled.div`
  position: relative;
  width: 1080px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 60%,
      ${color.primary} 100%
    );
  }
`

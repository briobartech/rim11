import styled from 'styled-components'
import { themeData } from '../assets/colors'

const colors = themeData

function ScannerPage () {
  return (
    <>
      <StyledScannerPage>
        <div className='scanner-container'>
          <h2>Scanner Page</h2>
          <p>Here you can implement your scanner functionality.</p>
        </div>
      </StyledScannerPage>
    </>
  )
}
export default ScannerPage

const StyledScannerPage = styled.div`
  .scanner-container {
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

import styled from 'styled-components'
import Scanner from './scanner.jsx'

function ScannerPage () {
  return (
    <>
      <StyledScannerPage>
        <div className='scanner-container'>
          <Scanner />
        </div>
      </StyledScannerPage>
    </>
  )
}
export default ScannerPage

const StyledScannerPage = styled.div`
  .scanner-container {
  width: 480px;
  }
`

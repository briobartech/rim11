import styled from 'styled-components'

function ScannerPage () {
  return (
    <>
      <StyledScannerPage>
        <div className='scanner-container'>
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

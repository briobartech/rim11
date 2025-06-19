import {styled} from 'styled-components'
import { themeData } from '../assets/colors.js';    

function Title({props}) {
    return (
        <StyledTitle>
            <h1>{props}</h1>
        </StyledTitle>
    );
}
export default Title
const StyledTitle = styled.div`
font-family: 'Jockey One', sans-serif;
font-size: 4em;
padding: 20px;
color: ${themeData.text1};
`
import styled from "styled-components";
import {texts} from "../assets/text.js"

function InfoPage() {

    return (<>
        <InfoPageStyled>
            <div className="title">Regimiento de Infanteria de Montaña 11 "General Las Heras"</div>
            <p>{texts["info"]}</p>
        </InfoPageStyled>
    </>)
}

export default InfoPage;

const InfoPageStyled = styled.div`;

`
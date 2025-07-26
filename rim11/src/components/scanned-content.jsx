import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "./app-context";
AppContext
function ScannedContent({ id }) {
  const content = useContext(AppContext).datos[id];

  if (!content) {
    return <div>ID no encontrado en sources.images</div>;
  }

  return (
    <ScannedContentStyled $themeData={useContext(AppContext).themeData}>
      <div className="scanned-content">
        <img src={content.path} alt={content.title} />
        <h2>{content.nombre}</h2>
        <p>{content.descripcion}</p>
      </div>
    </ScannedContentStyled>
  );
}
export default ScannedContent;
const ScannedContentStyled = styled.div`

  .scanned-content {
  display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
}
  img {
    width: 60%;
  }
    h2{
    width: 50%;
    text-align: center;
    font-size: 3em;
    color: ${({$themeData})=> $themeData.text1};
    margin: 20px;
    }
    p {
    width: 50%;
    text-align: center; 
    font-size: 2em;
    color: ${({$themeData})=> $themeData.text1};};
    padding: 0 20px;}
`;

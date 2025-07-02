import styled from "styled-components";
import { images } from "../assets/sources";
import { themeData } from "../assets/colors.js";
const colors = themeData;
function ScannedContent({ id }) {
  const content = images[id];

  if (!content) {
    return <div>ID no encontrado en sources.images</div>;
  }

  return (
    <ScannedContentStyled>
      <div className="scanned-content">
        <img src={content.path} alt={content.title} />
        <h2>{content.title}</h2>
        <p>{content.description}</p>
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
height: 100vh;}
  img {
    width: 60%;
  }
    h2{
    width: 50%;
    text-align: center;
    font-size: 3em;
    color: ${colors.text1};
    margin: 20px;
    }
    p {
    width: 50%;
    text-align: center; 
    font-size: 2em;
    color: ${colors.text1};};
    padding: 0 20px;}
`;

import styled from "styled-components";

const GifStyle = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 0%;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;

  background-color: #dbfd00;
  border: 3px solid #000000;
  border-radius: 10px;
  box-shadow: 5px 5px #000000;

  .gif-image {
    width: 100%;
  }

  .gif-title {
    margin-top: 10px;
    margin-bottom: 10px;

    color: #000000;
  }
`;

export default GifStyle;

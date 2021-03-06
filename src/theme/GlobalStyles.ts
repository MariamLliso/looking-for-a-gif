import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;

    margin: 30px;
    height: 100%;

    background-color: #FFFFF4;
    background-image: radial-gradient(#000000 0.5px, #FFFFF4 0.5px);
    background-size: 10px 10px;

    font-family: 'Poppins', sans-serif;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;

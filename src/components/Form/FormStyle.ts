import styled from "styled-components";

const FormStyle = styled.div`
  margin-bottom: 60px;

  .search-form {
    display: flex;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    @media only screen and (min-width: 600px) {
      flex-direction: row;
    }
  }

  .search-input {
    @media only screen and (max-width: 600px) {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 20px;
    }

    @media only screen and (min-width: 600px) {
      margin-right: 50px;
      width: 100%;
    }

    padding: 10px;

    background-color: #fffff4;
    border: 3px solid #000000;
    border-radius: 10px;
    box-shadow: 5px 5px #000000;

    font-family: inherit;
    font-weight: bold;
    font-size: 1em;

    &:focus-visible,
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 5px 5px #dbfd00;
    }
  }

  .search-button {
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 10px;
    }

    @media only screen and (min-width: 600px) {
      padding: 10px 100px;
    }

    background-color: #dbfd00;
    border: 3px solid #000000;
    border-radius: 10px;
    box-shadow: 5px 5px #000000;

    font-family: inherit;
    font-weight: bold;
    font-size: 1em;
  }
`;

export default FormStyle;

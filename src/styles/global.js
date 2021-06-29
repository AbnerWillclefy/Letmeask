import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.background};
  }

  body {
    height: 100%;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: #000;
    transition: 0.15s linear;
  }

  html {
    font-size: 62.5%;
    background-color: ${props => props.theme.background};
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
`;
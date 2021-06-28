import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  #root {
    height: 100vh;
    width: 100vw;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: #000;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }
`;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 5px;
    padding: 0;
    font-family: inherit;
  }

  body {
    font-family: Arial, sans-serif; 
    font-size: 16px; 
    line-height: 1.6; 
    background-color: #2F2E41; 
    color: #fff; 
  }

`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }
`;
 
export default GlobalStyle;
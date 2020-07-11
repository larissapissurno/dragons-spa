import { createGlobalStyle, css } from 'styled-components';
const mobile = window.matchMedia('(max-width: 600px)').matches;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    ${
      mobile
        ? css`
            max-width: 100%;
          `
        : css`
            max-width: calc(100vw - 300px);
          `
    }
    
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;

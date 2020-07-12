import styled, { createGlobalStyle } from 'styled-components';
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
    /* margin: 0 auto;
    padding: 40px 20px; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  height: calc(100vh - 225px);
  width: calc(100vw - 100px);
  border-radius: 20px;
  background: #282a36;
  color: #e3dfdb;
  -webkit-box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  display: block;
  margin: 20px auto;
  overflow: hidden;
`;

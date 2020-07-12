import styled from 'styled-components';

export const Nav = styled.nav`
  background: #dadada;
  width: calc(100vw - 100px);
  border-radius: 20px;
  color: #282a36;
  margin: 20px auto 0 auto;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

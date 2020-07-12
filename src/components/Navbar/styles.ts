import styled from 'styled-components';
import { shade } from 'polished';

export const Nav = styled.nav`
  background: #e1e1e5;
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
  font-size: 19px;

  svg {
    cursor: pointer;
    transition: color 0.2s;
  }

  svg:hover {
    color: ${shade(0.2, '#282a368f')};
  }
`;
